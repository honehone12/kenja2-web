<script lang="ts">
    import { SearchType } from "$lib/client/search.js";
    import SearchResultBuffer from "$lib/pages/SearchResultBuffer.svelte";
    import { Lang } from "$lib";

    let { data } = $props();
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>ケンジャニメ -　ランダム アニメとキャラクター</title>
    {:else}
        <title>Kenjanime - Random Anime and Character</title>
    {/if}
    <meta name="application-name" content="Kenjanime" />
    <meta name="author" content="Twelfthonehone" />
    {#if data.lang === Lang.Jp}
        <meta
            name="description"
            content="ランダムにセレクトされたアニメとキャラクター、トレーラーです。今まで知らなかったアニメや好みのキャラクターが新しく見つかるかも。"
        />
        <meta
            name="keywords"
            content="ケンジャ, アニメ, キャラクター, 検索, おすすめ, 似ている, 画像, ベクトル検索, 画像検索, 類似検索, 簡単検索, ランダム"
        />
    {:else}
        <meta
            name="description"
            content="Randomly selected anime, characters, and trailers. You might discover new anime you didn't know or new character you like."
        />
        <meta
            name="keywords"
            content="kenja, anime, character, search, recommendation, similar, image, vector search, image search, similarity search, easy search, random"
        />
    {/if}
</svelte:head>

<SearchResultBuffer
    lang={data.lang}
    buffer={data.bufferedStream}
    searchType={SearchType.Random}
/>
