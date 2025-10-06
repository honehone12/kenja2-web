<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/layouts/Navbar.svelte";
    import Dock from "$lib/layouts/Dock.svelte";
    import Footer from "$lib/layouts/Footer.svelte";
    import { canonicalUrl } from "$lib";
    import { page } from "$app/state";

    let { children, data } = $props();
</script>

<svelte:head>
    <link rel="canonical" href={canonicalUrl(page.url, data.lang).toString()} />
</svelte:head>

<Navbar lang={data.lang} />
{@render children()}
<Dock lang={data.lang} />
<Footer lang={data.lang} />
