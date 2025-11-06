<script>
    import Meta from "$lib/meta/Meta.svelte";
    import NoIndex from "$lib/meta/NoIndex.svelte";
    import MyList from "$lib/pages/MyList.svelte";

    let { data } = $props();

    const title = "Kenjanime - My List";
    const titleJapanese = "ケンジャニメ - マイリスト";
    const description =
        "Anime & character search and recommendation powered by AI image vector search. Save List of Your Favorite Items.";
    const descriptionJapanese =
        "アニメ & キャラクターの検索とAI画像ベクターサーチによるおすすめシステム。お気に入りのアイテムをリストにして保存します。";
    const keywords =
        "kenja, anime, character, ai, search, recommendation, similar, image, ai search, vector search, image search, similarity search, favorite";
    const keywordsJapanese =
        "ケンジャ, アニメ, キャラクター, AI, 検索, おすすめ, 似ている, 画像, AI検索, ベクトル検索, 画像検索, 類似検索, お気に入り";
</script>

<NoIndex />
<Meta
    lang={data.lang}
    {title}
    {titleJapanese}
    {description}
    {descriptionJapanese}
    {keywords}
    {keywordsJapanese}
/>

<MyList lang={data.lang} />
