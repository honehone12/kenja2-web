<script lang="ts">
    import {page} from '$app/state';
    import LoadingMsg from "$lib/components/LoadingMsg.svelte";
    import type { SearchResult, FlatDocument } from "$lib/documents/anime-search/documents";
    import CandidateCard from "$lib/components/CandidateCard.svelte";
    import { SearchType } from '$lib/client/search';
    import { Lang } from '$lib';

    interface Props {
        buffer: Promise<SearchResult>;
        searchType: SearchType;
        lang: Lang;
    }

    let {buffer, searchType, lang}: Props = $props();

    function vectorSource(documents: FlatDocument[]) {
        return documents.at(0)?.name ?? ' ';
    }
    
    function searchKeywords() {
        // if this is shown, kws are wihin limit and there are matched results.
        let kw = page.url.searchParams.get('keyword') ?? '';
        return kw.replace(/<.*?>/g, '');
    }

    function itemTypeLabel() {
        const iType = page.url.searchParams.get('item-type');
        // don't show unexpected values;
        switch (iType) {
        case 'all':
            return 'Anime and Characters'; 
        case 'anime':
            return 'Anime'
        case 'character':
            return 'Character';
        default:
            return '';
        }
    }
</script>

<div class="mt-20 text-center">
    <h1 class="text-3xl text-info">Search Results</h1>
</div>
{#if searchType === SearchType.Text}
    <div class="mt-20 text-center">
        <h2 class="text-lg">Tip💡</h2>
        {#if lang === Lang.Jp}
            <p>他のキーワードを試すには下部のサーチアイコンをクリックします。</p>
        {:else}
            <p>Click the search icon at the bottom to try other keywords.</p>
        {/if}
    </div>
{/if}    
{#await buffer}
    <div class="hero min-h-screen w-full">
        <div class="hero-content">
            <LoadingMsg/>
        </div>
    </div>
{:then {documents}}
    {#if documents}
        <div class="py-20">
            <div class="hero w-full">
                <div class="hero-content card border border-neutral-500 text-center min-w-80 p-5 mx-10 mb-10">
                    {#if searchType === SearchType.Vector}
                        <h2 class="text-lg">Similar {itemTypeLabel()} with "{vectorSource(documents)}"</h2>
                    {:else if searchType === SearchType.Text}
                        <h2 class="text-lg">Search results of {itemTypeLabel()} for "{searchKeywords()}"</h2>
                    {/if}
                </div>
            </div>
            <div class="hero w-full">
                <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
                    {#each documents as doc}
                        <CandidateCard      
                            {doc}
                            {lang}
                        />
                    {/each}
                </div>
            </div>
        </div>
    {:else}
        <div class="hero min-h-screen w-full">
            <h2 class="hero-content text-xl">No results</h2>
        </div>
    {/if}
{:catch}
    <div class="hero min-h-screen w-full">
        <h2 class="hero-content text-xl">No results</h2>
    </div>
{/await}
{#if searchType === SearchType.Text}
    <div class="text-center mb-20 mx-5">
        <h2 class="text-lg">Tip💡</h2>
        {#if lang === Lang.Jp}
            <p>ファジー検索をONにするかどうかによって検索結果は変わります。</p>
        {:else}
            <p>Search results will vary depending on whether fuzzy search is ON or not.</p>
        {/if}
    </div>
{/if}
