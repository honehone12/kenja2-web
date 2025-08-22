<script lang="ts">
    import { SearchType } from '$lib/client/search.js';
    import SearchResultBuffer from '$lib/pages/SearchResultBuffer.svelte';

    let {data} = $props();
</script>

<svelte:head>
	<title>Kenja - Similar Anime and Character Search Result</title>
</svelte:head>

<SearchResultBuffer 
    buffer={data.bufferedStream} 
    needAgeVerification={data.needAgeVerification}
    searchType={SearchType.Vector}
    lang={data.lang}
/>
