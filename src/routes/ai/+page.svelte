<script lang="ts">
    import Meta from "$lib/meta/Meta.svelte";
    import Ai from "$lib/pages/Ai.svelte";

    let { data } = $props();

    const title = "Kenjanime - Anime & Character AI Image Search";
    const titleJapanese = "ケンジャニメ - アニメ & キャラクターのAI画像検索";
    const description =
        "Anime & Character search and recommendation powered by AI Image search. Image search powered by a local AI that performs 100% in the browser.";
    const descriptionJapanese =
        "アニメ & キャラクターの検索とAI画像検索によるおすすめ。１００％ブラウザで推論するローカルAIで画像検索。お好きな画像でAI検索できます。";
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

<Ai lang={data.lang} />
