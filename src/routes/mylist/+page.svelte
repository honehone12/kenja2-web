<script>
    import { Lang } from "$lib";
    import MyList from "$lib/pages/MyList.svelte";

    let { data } = $props();

    const title = "Kenjanime - My List";
    const titleJapanese = "ケンジャニメ - マイリスト";
    const description =
        "Anime & character search and recommendation powered by image vector search. Save List of Your Favorite Items.";
    const descriptionJapanese =
        "アニメ & キャラクターの検索と画像ベクターサーチによるおすすめシステム。お気に入りのアイテムをリストにして保存します。";
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>{titleJapanese}</title>
        <meta name="description" content={descriptionJapanese} />
        <meta
            name="keywords"
            content="ケンジャ, アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, ベクトル検索, 画像検索, 類似検索, お気に入り"
        />
        <meta property="og:title" content={titleJapanese} />
        <meta property="og:description" content={descriptionJapanese} />
    {:else}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
            name="keywords"
            content="kenja, anime, character, search, recommendation, similar, image, vector search, image search, similarity search, favorite"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
    {/if}
</svelte:head>

<MyList lang={data.lang} />
