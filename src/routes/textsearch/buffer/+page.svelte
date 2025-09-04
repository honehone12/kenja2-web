<script lang="ts">
    import { Lang } from '$lib';
    import { SearchType } from '$lib/client/search.js';
    import SearchResultBuffer from '$lib/pages/SearchResultBuffer.svelte';

    let {data} = $props();
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>ケンジャ - アニメとキャラクターのキーワード検索結果</title>
        <meta
			name="description"
			content="ケンジャはアニメ ＆ キャラクターの検索とベクターサーチによるレコメンデーションシステムです。"
		/>
    {:else}
	    <title>Kenja - Results of Anime and Character Keyword Search</title>
        <meta
			name="description"
			content="Kenja is a system for anime & character search and recommendation powered by vector search."
		/>
    {/if}
</svelte:head>

<SearchResultBuffer 
    buffer={data.bufferedStream}
    searchType={SearchType.Text}
    lang={data.lang}
/>
