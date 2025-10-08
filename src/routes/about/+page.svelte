<script>
    import { Lang } from "$lib";
    import About from "$lib/pages/About.svelte";

    let { data } = $props();

    const title = "Kenjanime - About Kenjanime";
    const titleJapanese = "ケンジャニメ - ケンジャニメについて";
    const description =
        "This page explains what makes Kenjanime's anime search unique, why I created it, and the key technologies behind it.";
    const descriptionJapanese =
        "このページではケンジャニメのアニメ検索の独自性や作成した理由、鍵となるテクノロジーについて説明しています。";
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>{titleJapanese}</title>
        <meta name="description" content={descriptionJapanese} />
        <meta
            name="keywords"
            content="ケンジャ, アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, ベクトル検索, 画像検索, 類似検索, 簡単検索"
        />
        <meta property="og:title" content={titleJapanese} />
        <meta property="og:description" content={descriptionJapanese} />
    {:else}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
            name="keywords"
            content="kenja, anime, character, search, recommendation, similar, image, vector search, image search, similarity search, easy search"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
    {/if}
</svelte:head>

<About lang={data.lang} />
