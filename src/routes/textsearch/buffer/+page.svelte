<script lang="ts">
    import { Lang, SearchType } from "$lib";
    import SearchResultBuffer from "$lib/pages/SearchResultBuffer.svelte";

    let { data } = $props();
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>ケンジャニメ - アニメとキャラクターのキーワード検索結果</title>
    {:else}
        <title>Kenjanime - Results of Anime and Character Keyword Search</title>
    {/if}
    <meta name="application-name" content="Kenjanime" />
    <meta name="author" content="Twelfthonehone" />
    {#if data.lang === Lang.Jp}
        <meta
            name="description"
            content="アニメ ＆ キャラクターの検索と画像ベクターサーチによるおすすめシステム。アニメ ＆ キャラクターの画像検索の結果を表示しています。"
        />
        <meta
            name="keywords"
            content="ケンジャ, アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, ベクトル検索, 画像検索, 類似検索, 簡単検索"
        />
    {:else}
        <meta
            name="description"
            content="Anime & character search and recommendation powered by image vector search. Showing image search results for anime & characters."
        />
        <meta
            name="keywords"
            content="kenja, anime, character, search, recommendation, similar, image, vector search, image search, similarity search, easy search"
        />
    {/if}
</svelte:head>

<SearchResultBuffer
    lang={data.lang}
    buffer={data.bufferedStream}
    searchType={SearchType.Text}
/>
