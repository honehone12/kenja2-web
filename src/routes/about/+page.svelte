<script>
    import { Lang } from "$lib";
    import About from "$lib/pages/About.svelte";

    let { data } = $props();
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>ケンジャニメ - ケンジャニメについて</title>
    {:else}
        <title>Kenjanime - About Kenjanime</title>
    {/if}
    <meta name="application-name" content="Kenjanime" />
    <meta name="author" content="Twelfthonehone" />
    {#if data.lang === Lang.Jp}
        <meta
            name="description"
            content="このページではケンジャニメについて初めての人でもわかりやすく説明しています。"
        />
        <meta
            name="keywords"
            content="ケンジャ, アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, ベクトル検索, 画像検索, 類似検索, 簡単検索"
        />
    {:else}
        <meta
            name="description"
            content="This page explains Kenjanime in an easy-to-understand manner even for first-time users."
        />
        <meta
            name="keywords"
            content="kenja, anime, character, search, recommendation, similar, image, vector search, image search, similarity search, easy search"
        />
    {/if}
</svelte:head>

<About lang={data.lang} />
