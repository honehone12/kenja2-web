<script lang="ts">
    import SearchResultBuffer from "$lib/pages/SearchResultBuffer.svelte";
    import { SearchType } from "$lib";
    import Meta from "$lib/meta/Meta.svelte";

    let { data } = $props();

    const title = "Kenjanime - Random Anime and Character";
    const titleJapanese = "ケンジャニメ - ランダム アニメとキャラクター";
    const description =
        "Randomly selected anime, characters, and trailers. You might discover new anime you didn't know or new character you like.";
    const descriptionJapanese =
        "ランダムにセレクトされたアニメとキャラクター、トレーラーです。今まで知らなかったアニメや好みのキャラクターが新しく見つかるかも。";
    const keywords =
        "kenja, anime, character, ai, search, recommendation, similar, image, ai search, vector search, image search, similarity search, easy search, random";
    const keywordsJapanese =
        "ケンジャ, アニメ, キャラクター, AI, 検索, おすすめ, 似ている, 画像, AI検索, ベクトル検索, 画像検索, 類似検索, 簡単検索, ランダム";
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
    searchType={SearchType.Random}
/>
