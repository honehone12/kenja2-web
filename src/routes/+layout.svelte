<script lang="ts">
    import '../app.css';
    import Navbar from "$lib/layouts/Navbar.svelte";
    import Dock from "$lib/layouts/Dock.svelte";
	import Footer from "$lib/layouts/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<title>Anime Kenja - anime search engine</title>
	<meta
		name="description"
		content="Anime Kenja is a anime search engine. You can search animes with keywords by full text search and also find similar animes by vector search."
	/>
</svelte:head>
<Navbar/>
{@render children()}
<Dock/>
<Footer/>
