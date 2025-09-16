<script lang="ts">
    import { Lang } from "$lib";
    import Latest from "$lib/pages/Latest.svelte";

    let { data } = $props();
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>ケンジャニメ - 最新のアニメ</title>
    {:else}
        <title>Kenjanime - Latest Anime</title>
    {/if}
    <meta name="application-name" content="Kenjanime" />
    <meta name="author" content="Twelfthonehone" />
    {#if data.lang === Lang.Jp}
        <meta
            name="description"
            content="最新のアニメ。最近追加された人気アニメの一覧です。"
        />
        <meta
            name="keywords"
            content="ケンジャ　アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, ベクトル検索, 画像検索, 類似検索, 簡単検索"
        />
    {:else}
        <meta
            name="description"
            content="Latest Anime. A list of popular anime that have been added recently."
        />
        <meta
            name="keywords"
            content="kenja, anime, character, search, recommendation, similar, image, vector search, image search, similarity search, easy search"
        />
    {/if}
</svelte:head>

<Latest lang={data.lang} />
