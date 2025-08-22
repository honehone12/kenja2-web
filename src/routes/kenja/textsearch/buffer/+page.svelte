<script lang="ts">
    import { SearchType } from '$lib/client/search.js';
    import SearchResultBuffer from '$lib/pages/SearchResultBuffer.svelte';

    let {data} = $props();
</script>

<svelte:head>
	<title>Anime Kenja - Anime and Character Keyword Search Result</title>
</svelte:head>

<SearchResultBuffer 
    buffer={data.bufferedStream}
    needAgeVerification={data.needAgeVerification} 
    searchType={SearchType.Text}
    lang={data.lang}
/>
