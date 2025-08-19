<script lang="ts">
    import { SearchType } from '$lib/client/search-type.js';
    import SearchResultBuffer from '$lib/components/SearchResultBuffer.svelte';

    let {data} = $props();
</script>

<svelte:head>
	<title>Kenja - Similar Anime and Character Search Result</title>
</svelte:head>

<SearchResultBuffer 
    buffer={data.bufferedStream} 
    needAgeVerification={false}
    searchType={SearchType.Vector}
/>
