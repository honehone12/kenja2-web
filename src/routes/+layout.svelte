<script lang="ts">
	'use strict';
    
	import Footer from '$lib/components/layouts/Footer.svelte';
    import Navbar from '$lib/components/layouts/Navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Navbar/>
{@render children()}
<Footer/>
