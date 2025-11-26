<script lang="ts">
    import Meta from "$lib/meta/Meta.svelte";
    import Root from "$lib/pages/Root.svelte";

    let { data } = $props();

    const title = "Kenjanime - Anime & Character AI Search and Recommendation";
    const titleJapanese =
        "ケンジャニメ - アニメ & キャラクターのAI検索とおすすめ";
    const description =
        "Anime & Character search and recommendation powered by AI Image search. Just choose your favorite anime image and you'll find a variety of similar anime.";
    const descriptionJapanese =
        "アニメ & キャラクターの検索とAI画像検索によるおすすめ。好きなアニメ画像を選ぶだけでいろいろアニメが見つかります。";
    const keywords =
        "kenja, anime, character, ai, search, recommendation, similar, image, ai search, vector search, image search, similarity search, easy search";
    const keywordsJapanese =
        "ケンジャ, アニメ, キャラクター, AI, 検索, おすすめ, 似ている, 画像, AI検索, ベクターサーチ, 画像検索, 類似検索, 簡単検索";
</script>

<Meta
    lang={data.lang}
    {title}
    {titleJapanese}
    {description}
    {descriptionJapanese}
    {keywords}
    {keywordsJapanese}
/>

<Root lang={data.lang} recommend={data.recommend} />
