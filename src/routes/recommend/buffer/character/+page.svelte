<script>
    import { ItemType } from "$lib/documents/anime-search/queries.js";
    import Meta from "$lib/meta/Meta.svelte";
    import NoIndex from "$lib/meta/NoIndex.svelte";
    import Recommend from "$lib/components/Recommend.svelte";

    let { data } = $props();

    const title = "Kenjanime - Character";
    const titleJapanese = "ケンジャニメ - キャラクター";
    const description =
        "Anime & character search and recommendation powered by AI image vector search. Recommending anime characters for you.";
    const descriptionJapanese =
        "アニメ & キャラクターの検索とAI画像ベクターサーチによるおすすめシステム。あなたにおすすめのアニメキャラクターです。";
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
<main class="py-20 min-h-screen">
    <Recommend lang={data.lang} itemType={ItemType.Character} />
</main>
