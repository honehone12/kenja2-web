<script lang="ts">
    import '../app.css';
    import Navbar from "$lib/layouts/Navbar.svelte";
    import Dock from "$lib/layouts/Dock.svelte";
	import Footer from "$lib/layouts/Footer.svelte";

	let {children} = $props();
</script>

<Navbar useKenjaMode={true}/>
{@render children()}
<Dock useKenjaMode={true}/>
<Footer/>
