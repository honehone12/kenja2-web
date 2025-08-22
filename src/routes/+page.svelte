<script lang="ts">
    import { Lang } from "$lib";
    import Top from "$lib/pages/Top.svelte";
    import { getContext } from "svelte";
</script>

<svelte:head>
	<title>Kenja - Anime and Character Search Engine</title>
	<meta
		name="description"
		content="Anime Kenja is a anime and character search engine, featuring full text keyword search and similarity vector search."
	/>
</svelte:head>

<Top lang={getContext('lang')}/>
