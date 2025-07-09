<script lang="ts">
	'use strict';
    
	import Footer from "$lib/layouts/Footer.svelte";
    import Navbar from "$lib/layouts/Navbar.svelte";
	import '../app.css';

	let { children } = $props();
</script>

<Navbar/>
{@render children()}
<Footer/>
