<script lang="ts">
    import { Lang } from '$lib';
    import { SearchType } from '$lib/client/search.js';
    import SearchResultBuffer from '$lib/pages/SearchResultBuffer.svelte';

    let {data} = $props();
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>ケンジャ - アニメとキャラクターの類似検索結果</title>
    {:else}
	    <title>Kenja - Results of Similar Anime and Character Search</title>
    {/if}
</svelte:head>

<SearchResultBuffer 
    buffer={data.bufferedStream} 
    searchType={SearchType.Vector}
    lang={data.lang}
/>
