<script lang="ts">
    import Top from "$lib/pages/Top.svelte";

    let {data} = $props();
</script>

<svelte:head>
	<title>Kenja - Anime and Character Search Engine</title>
	<meta
		name="description"
		content="Anime Kenja is a anime and character search engine, featuring full text keyword search and similarity vector search."
	/>
</svelte:head>

<Top lang={data.lang}/>
