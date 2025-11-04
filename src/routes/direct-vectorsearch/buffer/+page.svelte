<script lang="ts">
    import { Lang, SearchType } from "$lib";
    import SearchResultBuffer from "$lib/pages/SearchResultBuffer.svelte";

    let { data } = $props();

    const title = "Kenjanime - Results of Similar Anime and Character Search";
    const titleJapanese = "ケンジャニメ - アニメとキャラクターの類似検索結果";
    const description =
        "Anime & character search and recommendation powered by image vector search. Showing image search results for anime & characters.";
    const descriptionJapanese =
        "アニメ & キャラクターの検索と画像ベクターサーチによるおすすめシステム。アニメ & キャラクターの画像検索の結果を表示しています。";
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>{titleJapanese}</title>
        <meta name="description" content={descriptionJapanese} />
        <meta
            name="keywords"
            content="ケンジャ, アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, ベクトル検索, 画像検索, 類似検索, 簡単検索, 画像ベクトル"
        />
        <meta property="og:title" content={titleJapanese} />
        <meta property="og:description" content={descriptionJapanese} />
    {:else}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
            name="keywords"
            content="kenja, anime, character, search, recommendation, similar, image, vector search, image search, similarity search, easy search, image vector"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
    {/if}
</svelte:head>

<SearchResultBuffer
    lang={data.lang}
    buffer={data.bufferedStream}
    searchType={SearchType.Vector}
/>
