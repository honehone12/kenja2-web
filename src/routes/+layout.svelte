<script lang="ts">
    import '../app.css';
    import Navbar from "$lib/layouts/Navbar.svelte";
    import Dock from "$lib/layouts/Dock.svelte";
	import Footer from "$lib/layouts/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<title>Anime Kenja - anime and character search engine</title>
	<meta
		name="description"
		content="Anime Kenja is a anime and character search engine, featuring keywords full text search and similarity vector search."
	/>
</svelte:head>
<Navbar/>
{@render children()}
<Dock/>
<Footer/>
