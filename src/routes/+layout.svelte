<script lang="ts">
    import '../app.css';
    import Navbar from "$lib/layouts/Navbar.svelte";
    import Dock from "$lib/layouts/Dock.svelte";
	import Footer from "$lib/layouts/Footer.svelte";
    import { setContext } from 'svelte';

	let {children} = $props();

    setContext('useKenjaMode', true);
</script>

<Navbar/>
{@render children()}
<Dock/>
<Footer/>
