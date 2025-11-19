<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/layouts/Navbar.svelte";
    import Dock from "$lib/layouts/Dock.svelte";
    import Footer from "$lib/layouts/Footer.svelte";
    import { canonicalUrl, Lang } from "$lib";
    import { page } from "$app/state";
    import { onMount } from "svelte";

    let { children, data } = $props();

    onMount(() => {
        document.documentElement.setAttribute(
            "lang",
            data.lang === Lang.Jp ? "ja" : "en",
        );
    });
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
