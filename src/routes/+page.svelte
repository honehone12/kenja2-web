<script lang="ts">
    import { Lang } from "$lib";
    import Top from "$lib/pages/Top.svelte";

    let { data } = $props();

    const title = "Kenjanime - Anime & Character Search and Recommendation";
    const titleJapanese =
        "ケンジャニメ - アニメ & キャラクターの検索とおすすめ";
    const description =
        "Anime & Character search and recommendation system powered by vector search. Just choose your favorite anime image and you'll find a variety of similar anime.";
    const descriptionJapanese =
        "アニメ & キャラクターの検索と画像ベクターサーチによるおすすめシステムです。好きなアニメ画像を選ぶだけでいろいろアニメが見つかります。";
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>{titleJapanese}</title>
        <meta name="description" content={descriptionJapanese} />
        <meta
            name="keywords"
            content="ケンジャ, アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, ベクターサーチ, 画像検索, 類似検索, 簡単検索"
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

<Top lang={data.lang} />
