<script lang="ts">
	'use strict';
    
	import Footer from "$lib/layouts/Footer.svelte";
    import Navbar from "$lib/layouts/Navbar.svelte";
    import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Kenja anime search engine</title>
	<meta
		name="desctiption"
		content="Kenja is a anime search engine being developed by individual. You can search animes with keywords by full text search and also find similar animes by vector search."
	/>
</svelte:head>
<Navbar/>
{@render children()}
<Footer/>
