<script lang="ts">
    import SearchResultBuffer from "$lib/pages/SearchResultBuffer.svelte";
    import { Lang, SearchType } from "$lib";

    let { data } = $props();

    const title = "Kenjanime - Random Anime and Character";
    const titleJapanese = "ケンジャニメ - ランダム アニメとキャラクター";
    const description =
        "Randomly selected anime, characters, and trailers. You might discover new anime you didn't know or new character you like.";
    const descriptionJapanese =
        "ランダムにセレクトされたアニメとキャラクター、トレーラーです。今まで知らなかったアニメや好みのキャラクターが新しく見つかるかも。";
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>{titleJapanese}</title>
        <meta name="description" content={descriptionJapanese} />
        <meta
            name="keywords"
            content="ケンジャ, アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, ベクトル検索, 画像検索, 類似検索, 簡単検索, ランダム"
        />
        <meta property="og:title" content={titleJapanese} />
        <meta property="og:description" content={descriptionJapanese} />
    {:else}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
            name="keywords"
            content="kenja, anime, character, search, recommendation, similar, image, vector search, image search, similarity search, easy search, random"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
    {/if}
</svelte:head>

<SearchResultBuffer
    lang={data.lang}
    buffer={data.bufferedStream}
    searchType={SearchType.Random}
/>
