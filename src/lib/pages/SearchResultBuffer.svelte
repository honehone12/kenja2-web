<script lang="ts">
    import { page } from "$app/state";
    import {
        afterNavigate,
        beforeNavigate,
        replaceState,
    } from "$app/navigation";
    import { tick } from "svelte";
    import type {
        FlatDocument,
        SearchResult,
    } from "$lib/documents/anime-search/documents";
    import LoadingMsg from "$lib/components/LoadingMsg.svelte";
    import NoResults from "$lib/components/NoResults.svelte";
    import { Lang, SearchType, HTML_TAG } from "$lib";
    import SearchTipBottom from "$lib/components/SearchTipBottom.svelte";
    import SearchTipTop from "$lib/components/SearchTipTop.svelte";
    import Documents from "$lib/components/Documents.svelte";
    import Full from "$lib/component-layout/Full.svelte";

    interface Props {
        lang: Lang;
        buffer: Promise<SearchResult>;
        searchType: SearchType;
    }

    let { lang, buffer, searchType }: Props = $props();

    function searchKeywords() {
        // if this is shown, kws are wihin limit and there are matched results.
        let kw = page.url.searchParams.get("keyword") ?? "";
        return kw.replace(HTML_TAG, "");
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
            case SearchType.DirectVector:
                if (lang === Lang.Jp) {
                    return "AI画像ベクトル検索結果";
                } else {
                    return "Result of AI Image Vector Search";
                }
            default:
                return "";
        }
    }

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

<main>
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
    {#await buffer}
        <Full>
            <LoadingMsg />
        </Full>
    {:then { documents }}
        {#if documents && documents.length > 0}
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
                <Documents {lang} {documents} />
            </div>
        {:else}
            <NoResults {lang} />
        {/if}
    {:catch}
        <NoResults {lang} />
    {/await}
    <SearchTipBottom {lang} {searchType} />
</main>
