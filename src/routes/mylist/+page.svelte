<script>
    import { Lang } from "$lib";
    import MyList from "$lib/pages/MyList.svelte";

    let { data } = $props();
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>ケンジャニメ - マイリスト</title>
    {:else}
        <title>Kenjanime - My List</title>
    {/if}
    <meta name="application-name" content="Kenjanime" />
    <meta name="author" content="Twelfthonehone" />
    {#if data.lang === Lang.Jp}
        <meta
            name="description"
            content="アニメ ＆ キャラクターの検索と画像ベクターサーチによるおすすめシステム。お気に入りのアイテムをリストにして保存します。"
        />
        <meta
            name="keywords"
            content="ケンジャ, アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, ベクトル検索, 画像検索, 類似検索"
        />
    {:else}
        <meta name="description" content="Save List of Your Favorite Items." />
        <meta
            name="keywords"
            content="kenja, anime, character, search, recommendation, similar, image, vector search, image search, similarity search"
        />
    {/if}
</svelte:head>

<MyList lang={data.lang} />
