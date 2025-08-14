<script lang="ts">
    import { SearchType } from '$lib/client/search-type.js';
    import SearchResultBuffer from '$lib/components/SearchResultBuffer.svelte';

    let {data} = $props();
</script>

<svelte:head>
	<title>Anime Kenja - Keyword Search Result</title>
</svelte:head>

<SearchResultBuffer 
    buffer={data.bufferedStream}
    needAgeVerification={data.needAgeVerification} 
    searchType={SearchType.Text}
/>
