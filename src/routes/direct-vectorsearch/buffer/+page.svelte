<script lang="ts">
    import { SearchType } from "$lib";
    import Meta from "$lib/meta/Meta.svelte";
    import SearchResultBuffer from "$lib/pages/SearchResultBuffer.svelte";

    let { data } = $props();

    const title = "Kenjanime - Results of Anime and Character AI Image Search";
    const titleJapanese =
        "ケンジャニメ - アニメとキャラクターのAI画像検索の結果";
    const description =
        "Anime & character search and recommendation powered by AI image vector search. Showing AI image search results for anime & characters.";
    const descriptionJapanese =
        "アニメ & キャラクターの検索とAI画像ベクターサーチによるおすすめ。アニメ & キャラクターのAI画像検索の結果を表示しています。";
    const keywords =
        "kenja, anime, character, ai, search, recommendation, similar, image, ai search, vector search, image search, similarity search, easy search, image vector";
    const keywordsJapanese =
        "ケンジャ, アニメ, キャラクター, AI, 検索, おすすめ, 似ている, 画像, AI検索, ベクトル検索, 画像検索, 類似検索, 簡単検索, 画像ベクトル";
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

<SearchResultBuffer
    lang={data.lang}
    buffer={data.bufferedStream}
    searchType={SearchType.DirectVector}
/>
