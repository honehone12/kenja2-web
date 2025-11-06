<script>
    import Meta from "$lib/meta/Meta.svelte";
    import About from "$lib/pages/About.svelte";

    let { data } = $props();

    const title = "Kenjanime - About Kenjanime AI Image Search";
    const titleJapanese = "ケンジャニメ - AI画像検索 ケンジャニメについて";
    const description =
        "This page explains what makes Kenjanime's AI anime search unique, why I created it, and the key technologies behind it.";
    const descriptionJapanese =
        "このページではケンジャニメのAIアニメ検索の独自性や作成した理由、鍵となるテクノロジーについて説明しています。";
    const keywords =
        "kenja, ai, anime, character, search, recommendation, similar, image, ai search, vector search, image search, similarity search, easy search";
    const keywordsJapanese =
        "ケンジャ, AI, アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, AI検索, ベクトル検索, 画像検索, 類似検索, 簡単検索";
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

<About lang={data.lang} />
