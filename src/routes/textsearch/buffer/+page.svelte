<script lang="ts">
    import { Lang } from '$lib';
    import { SearchType } from '$lib/client/search.js';
    import SearchResultBuffer from '$lib/pages/SearchResultBuffer.svelte';

    let {data} = $props();
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>ケンジャ - アニメとキャラクターのキーワード検索結果</title>
    {:else}
	    <title>Kenja - Results of Anime and Character Keyword Search</title>
    {/if}
</svelte:head>

<SearchResultBuffer 
    buffer={data.bufferedStream}
    needAgeVerification={false} 
    searchType={SearchType.Text}
    lang={data.lang}
/>
