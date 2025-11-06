<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
        title: string;
        titleJapanese: string;
        description: string;
        descriptionJapanese: string;
        keywords: string;
        keywordsJapanese: string;
    }

    let {
        lang,
        title,
        titleJapanese,
        description,
        descriptionJapanese,
        keywords,
        keywordsJapanese,
    }: Props = $props();
</script>

<svelte:head>
    {#if lang === Lang.Jp}
        <title>{titleJapanese}</title>
        <meta name="description" content={descriptionJapanese} />
        <meta name="keywords" content={keywordsJapanese} />
        <meta property="og:title" content={titleJapanese} />
        <meta property="og:description" content={descriptionJapanese} />
    {:else}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
    {/if}
</svelte:head>
