<script lang="ts">
    import '../app.css';
    import Navbar from "$lib/layouts/Navbar.svelte";
    import Dock from "$lib/layouts/Dock.svelte";
	import Footer from "$lib/layouts/Footer.svelte";
    import { setContext } from 'svelte';
    import { page } from '$app/state';
    import { Lang } from '$lib';

	let {children, data} = $props();

    setContext('lang', lang());

    function lang() {
        const qLang = page.url.searchParams.get('lang');
        if (qLang === 'ja') {
            return Lang.Jp;
        } else if (qLang === 'en') {
            return Lang.En;
        } else {
            return data.lang;
        }
    }
</script>

<Navbar/>
{@render children()}
<Dock/>
<Footer/>
