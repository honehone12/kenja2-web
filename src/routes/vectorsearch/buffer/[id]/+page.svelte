<script lang="ts">
    import { Lang } from '$lib';
    import { SearchType } from '$lib/client/search.js';
    import SearchResultBuffer from '$lib/pages/SearchResultBuffer.svelte';

    let {data} = $props();
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>ケンジャニメ - アニメとキャラクターの類似検索結果</title>
        <meta
			name="description"
			content="ケンジャニメはアニメ ＆ キャラクターの検索とベクターサーチによるレコメンデーションシステムです。"
		/>
    {:else}
	    <title>Kenjanime - Results of Similar Anime and Character Search</title>
        <meta
			name="description"
			content="Kenjanime is a system for anime & character search and recommendation powered by vector search."
		/>
    {/if}
</svelte:head>

<SearchResultBuffer 
    buffer={data.bufferedStream} 
    searchType={SearchType.Vector}
    lang={data.lang}
/>
