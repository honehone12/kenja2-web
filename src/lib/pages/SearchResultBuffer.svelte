<script lang="ts">
    import {page} from '$app/state';
    import type { FlatDocument, SearchResult } from "$lib/documents/anime-search/documents";
    import LoadingMsg from "$lib/components/LoadingMsg.svelte";
    import CandidateCard from "$lib/components/CandidateCard.svelte";
    import NoResults from '$lib/components/NoResults.svelte';
    import { SearchType } from '$lib/client/search';
    import { Lang } from '$lib';
    import { onMount } from "svelte";
    import { INDEX_DB_MAX, IndexDb } from "$lib/client/indexdb";

    interface Props {
        buffer: Promise<SearchResult>;
        searchType: SearchType;
        lang: Lang;
    }

    let {buffer, searchType, lang}: Props = $props();
    let indexdb: IndexDb | null = $state(null);
	let myMap: Map<string, boolean> = $state(new Map());
    let docMap: Map<string, FlatDocument> = new Map();

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
        let kw = page.url.searchParams.get('keyword') ?? '';
        return kw.replace(/<.*?>/g, '');
    }

    function itemTypeLabel(l: Lang) {
        const iType = page.url.searchParams.get('item-type');
        // don't show unexpected values;
        switch (iType) {
        case 'anime':
            return l === Lang.Jp ? 'アニメ' : 'Anime';
        case 'character':
            return l === Lang.Jp ? 'キャラクター' : 'Character';
        case 'trailer':
            return l === Lang.Jp ? 'トレーラー' : 'Trailer';
        default:
            return l === Lang.Jp ? '全' : 'All'; 
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
            console.warn('index db is not initialized yet.');
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
</script>

<div class="mt-20 mx-5 text-center">
    <h1 class="text-3xl text-secondary">
        {#if lang === Lang.Jp}
            検索結果
        {:else}
            Search Results
        {/if}
    </h1>
</div>
{#if searchType === SearchType.Text}
    <div class="mt-20 mx-5 text-center">
        <h2 class="text-lg">Tip💡</h2>
        <p>
            {#if lang === Lang.Jp}
                他のキーワードを試すには下部のサーチアイコンをクリックします。
            {:else}
                Click the search icon at the bottom to try other keywords.
            {/if}
        </p>
    </div>
{/if}    
{#await bufferResult()}
    <div class="hero min-h-screen w-full">
        <div class="hero-content">
            <LoadingMsg/>
        </div>
    </div>
{:then documents}
    {#if documents.length > 0}
        <div class="py-20">
            <div class="hero w-full">
                <div class="hero-content card border border-neutral-500 text-center min-w-80 p-5 mx-5 mb-10">
                    {#if searchType === SearchType.Vector}
                        <h2 class="text-lg">
                            {#if lang === Lang.Jp}
                                "{documents.at(0)?.name_japanese}"と似ている{itemTypeLabel(lang)}
                            {:else}
                                Similar {itemTypeLabel(lang)} with "{documents.at(0)?.name}"
                            {/if}
                        </h2>
                    {:else if searchType === SearchType.Text}
                        <h2 class="text-lg">
                            {#if lang === Lang.Jp}
                                "{searchKeywords()}"の{itemTypeLabel(lang)}検索結果
                            {:else}
                                Search results of {itemTypeLabel(lang)} for "{searchKeywords()}"
                            {/if}
                        </h2>
                    {/if}
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
        <NoResults {lang}/>
    {/if}
{:catch}
    <NoResults {lang}/>
{/await}
{#if searchType === SearchType.Text}
    <div class="text-center mb-20 mx-5">
        <h2 class="text-lg">Tip💡</h2>
        <p>
            {#if lang === Lang.Jp}
                ファジー検索をONにするかどうかによって検索結果は変わります。
            {:else}
                Search results will vary depending on whether fuzzy search is ON or not.
            {/if}
        </p>
    </div>
{/if}
