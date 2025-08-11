<script lang="ts">
    import SearchResultBuffer from '$lib/components/SearchResultBuffer.svelte';

    let {data} = $props();
</script>

<svelte:head>
	<title>Anime Kenja - Vector Search Result</title>
</svelte:head>

<SearchResultBuffer 
    buffer={data.bufferedStream} 
    needAgeVerification={data.needAgeVerification}
    isVector={true}
/>
