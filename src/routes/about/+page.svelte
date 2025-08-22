<script>
    import About from "$lib/pages/About.svelte";

    let {data} = $props();
</script>

<svelte:head>
	<title>Kenja - About Anime and Character Search Engine</title>
	<meta
		name="description"
		content="You can search animes and characters by keywords, and also similar summary text and images."
	/>
</svelte:head>

<About lang={data.lang}/>
