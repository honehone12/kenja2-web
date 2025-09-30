<script lang="ts">
    import { page } from "$app/state";
    import {
        afterNavigate,
        beforeNavigate,
        replaceState,
    } from "$app/navigation";
    import { onMount, tick } from "svelte";
    import type {
        FlatDocument,
        SearchResult,
    } from "$lib/documents/anime-search/documents";
    import LoadingMsg from "$lib/components/LoadingMsg.svelte";
    import CandidateCard from "$lib/components/CandidateCard.svelte";
    import NoResults from "$lib/components/NoResults.svelte";
    import { Lang, SearchType } from "$lib";
    import { INDEX_DB_MAX, IndexDb } from "$lib/client/indexdb";
    import SearchTipBottom from "$lib/components/SearchTipBottom.svelte";
    import SearchTipTop from "$lib/components/SearchTipTop.svelte";

    interface Props {
        lang: Lang;
        buffer: Promise<SearchResult>;
        searchType: SearchType;
    }

    let { lang, buffer, searchType }: Props = $props();
    let myMap: Map<string, boolean> = $state(new Map());
    let docMap: Map<string, FlatDocument> = new Map();
    let indexdb: IndexDb | null = null;

    async function bufferResult() {
        const result = await buffer;
        if (result.documents) {
            const list = result.documents;
            const map = new Map();
            list.forEach((value) => map.set(value.id, value));
            docMap = map;
            return list;
        } else {
            return [];
        }
    }

    function searchKeywords() {
        // if this is shown, kws are wihin limit and there are matched results.
        let kw = page.url.searchParams.get("keyword") ?? "";
        return kw.replace(/<.*?>/g, "");
    }

    function itemTypeLabel() {
        const iType = page.url.searchParams.get("item-type");
        // don't show unexpected values;
        switch (iType) {
            case "anime":
                return lang === Lang.Jp ? "アニメ" : "Anime";
            case "character":
                return lang === Lang.Jp ? "キャラクター" : "Character";
            case "trailer":
                return lang === Lang.Jp ? "トレーラー" : "Trailer";
            default:
                return lang === Lang.Jp ? "全" : "All";
        }
    }

    function searchResultLabel(doc: FlatDocument | undefined) {
        if (!doc) {
            return "";
        }

        switch (searchType) {
            case SearchType.Vector:
                if (lang === Lang.Jp) {
                    const name = doc.name_japanese ?? doc.name;
                    return `"${name}"と似ている${itemTypeLabel()}`;
                } else {
                    return `Similar ${itemTypeLabel()} with "${doc.name}"`;
                }
            case SearchType.Text:
                if (lang === Lang.Jp) {
                    return `"${searchKeywords()}"の${itemTypeLabel()}検索結果`;
                } else {
                    return `Search Results of ${itemTypeLabel()} for "${searchKeywords()}"`;
                }
            case SearchType.Random:
                if (lang === Lang.Jp) {
                    return "ランダム アニメとキャラクター";
                } else {
                    return "Random Anime and Character";
                }
            default:
                return "";
        }
    }

    async function refresh() {
        if (!indexdb) {
            return;
        }

        const myList = await indexdb.getMyListKeys();
        const map = new Map();
        myList.forEach((value) => map.set(value, true));
        myMap = map;
    }

    async function onStar(id: string, star: boolean) {
        if (!indexdb) {
            console.warn("index db is not initialized yet.");
            return;
        }

        try {
            if (star) {
                if (myMap.size < INDEX_DB_MAX) {
                    const doc = docMap.get(id);
                    if (doc && !myMap.has(id)) {
                        await indexdb.addMyList(doc);
                    }
                }
            } else {
                if (myMap.has(id)) {
                    await indexdb.deleteMyList(id);
                }
            }
        } catch (e) {
            console.error(e);
            return;
        }

        refresh();
    }

    onMount(async () => {
        try {
            indexdb = await IndexDb.open();
            refresh();
        } catch (e) {
            console.error(e);
        }
    });

    afterNavigate(async (nav) => {
        await nav.complete;

        let y = page.state.scrollY;
        if (!y || y < 0) {
            y = 0;
        }

        await tick();

        window.scrollTo({
            top: y,
            behavior: "instant",
        });
    });

    beforeNavigate(() => {
        const y = window.scrollY;
        replaceState("", { scrollY: y });
    });
</script>

<div class="mt-20 mx-5 text-center">
    <h1 class="text-3xl font-semibold text-secondary">
        {#if lang === Lang.Jp}
            検索結果
        {:else}
            Search Results
        {/if}
    </h1>
</div>
<SearchTipTop {lang} {searchType} />
{#await bufferResult()}
    <div class="hero min-h-screen w-full">
        <div class="hero-content">
            <LoadingMsg />
        </div>
    </div>
{:then documents}
    {#if documents.length > 0}
        <div class="py-10">
            <div class="hero w-full">
                <div
                    class="hero-content card border border-neutral-500 text-center min-w-80 p-5 mx-5 mb-10"
                >
                    <h2 class="text-lg">
                        {searchResultLabel(documents.at(0))}
                    </h2>
                </div>
            </div>
            <div class="hero w-full">
                <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
                    {#each documents as doc, i (i)}
                        <CandidateCard
                            {lang}
                            {doc}
                            star={myMap.has(doc.id)}
                            onStar={(id, star) => onStar(id, star)}
                        />
                    {/each}
                </div>
            </div>
        </div>
    {:else}
        <NoResults {lang} />
    {/if}
{:catch}
    <NoResults {lang} />
{/await}
<SearchTipBottom {lang} {searchType} />
