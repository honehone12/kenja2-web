<script>
    import About from "$lib/pages/About.svelte";
    import { getContext } from "svelte";

    const lang = getContext('lang'); 
</script>

<svelte:head>
	<title>Kenja - About Anime and Character Search Engine</title>
	<meta
		name="description"
		content="You can search animes and characters by keywords, and also similar summary text and images."
	/>
</svelte:head>

<About {lang}/>
