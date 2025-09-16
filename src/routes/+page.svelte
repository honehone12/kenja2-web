<script lang="ts">
    import { Lang } from "$lib";
    import Top from "$lib/pages/Top.svelte";

    let { data } = $props();
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>ケンジャニメ - アニメ ＆ キャラクターの検索とおすすめ</title>
    {:else}
        <title>Kenjanime - Anime & Character Search and Recommendation</title>
    {/if}
    <meta name="application-name" content="Kenjanime" />
    <meta name="author" content="Twelfthonehone" />
    {#if data.lang === Lang.Jp}
        <meta
            name="description"
            content="ケンジャニメはアニメ ＆ キャラクターの検索とベクターサーチによるおすすめシステムです。"
        />
        <meta
            name="keywords"
            content="アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, ベクターサーチ, 画像検索, 類似検索, 簡単検索"
        />
    {:else}
        <meta
            name="description"
            content="Kenjanime is a system for anime & character search and recommendation powered by vector search."
        />
        <meta
            name="keywords"
            content="anime, character, search, recommendation, similar, image, vector search, image search, similarity search, easy search"
        />
    {/if}
</svelte:head>

<Top lang={data.lang} />
