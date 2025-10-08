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
    <meta name="application-name" content="Kenjanime" />
    <meta name="author" content="Twelfthonehone" />
    <meta name="twitter:card" content="summary" />
    <meta property="og:type" content="website" />
    <meta
        property="og:url"
        content={canonicalUrl(page.url, data.lang).toString()}
    />
</svelte:head>

<Navbar lang={data.lang} />
{@render children()}
<Dock lang={data.lang} />
<Footer lang={data.lang} />
