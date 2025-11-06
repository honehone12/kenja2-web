<script lang="ts">
    import Meta from "$lib/meta/Meta.svelte";
    import NoIndex from "$lib/meta/NoIndex.svelte";
    import AiApp from "$lib/pages/AiApp.svelte";

    let { data } = $props();

    const title = "Kenjanime - Web App of Local AI Image Search ";
    const titleJapanese = "ケンジャニメ - ローカルAIの画像検索Webアプリ";
    const description =
        "Anime & Character search and recommendation powered by AI Image search. Image search web application powered by a local AI.";
    const descriptionJapanese =
        "アニメ & キャラクターの検索とAI画像検索によるおすすめ。１００％ブラウザで推論するローカルAIの画像検索ウェブアプリ。";
    const keywords =
        "kenja, anime, character, ai, search, recommendation, similar, image, ai search, vector search, image search, similarity search, easy search";
    const keywordsJapanese =
        "ケンジャ, アニメ, キャラクター, AI, 検索, おすすめ, 似ている, 画像, AI検索, ベクターサーチ, 画像検索, 類似検索, 簡単検索";
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

<AiApp lang={data.lang} />
