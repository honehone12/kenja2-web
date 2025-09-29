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
            content="アニメ ＆ キャラクターの検索と画像ベクターサーチによるおすすめシステムです。好きなアニメ画像を選ぶだけでいろいろアニメが見つかります。"
        />
        <meta
            name="keywords"
            content="ケンジャ, アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, ベクターサーチ, 画像検索, 類似検索, 簡単検索"
        />
    {:else}
        <meta
            name="description"
            content="Anime & Character search and recommendation system powered by vector search. Just choose your favorite anime image and you'll find a variety of similar anime."
        />
        <meta
            name="keywords"
            content="kenja, anime, character, search, recommendation, similar, image, vector search, image search, similarity search, easy search"
        />
    {/if}
</svelte:head>

<Top lang={data.lang} />
