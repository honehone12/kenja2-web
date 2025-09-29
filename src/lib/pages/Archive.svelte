<script lang="ts">
    import { Lang } from "$lib";
    import ManualDocumentsBundle from "$lib/components/ManualDocumentsBundle.svelte";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";

    interface BackLink {
        link: string;
        name: string;
    }

    interface Props {
        lang: Lang;
        year: string;
        yearJapanese: string;
        season: string;
        seasonJapanese: string;
        list: FlatDocument[];
        backLink: BackLink | null;
    }

    let {
        lang,
        year,
        yearJapanese,
        season,
        seasonJapanese,
        list,
        backLink,
    }: Props = $props();
</script>

<svelte:head>
    {#if lang === Lang.Jp}
        <title>ケンジャニメ - 過去のアニメ</title>
    {:else}
        <title>Kenjanime - Previous Anime</title>
    {/if}
    <meta name="application-name" content="Kenjanime" />
    <meta name="author" content="Twelfthonehone" />
    {#if lang === Lang.Jp}
        <meta
            name="description"
            content="過去のアニメ。{yearJapanese}{seasonJapanese}シーズン人気アニメの一覧です。"
        />
        <meta
            name="keywords"
            content="ケンジャ　アニメ, キャラクター, {yearJapanese}, {seasonJapanese},　検索, おすすめ, 似ている, 画像, ベクトル検索, 画像検索, 類似検索, 簡単検索"
        />
    {:else}
        <meta
            name="description"
            content="Previous Anime. A list of popular anime in {year} {season} Season."
        />
        <meta
            name="keywords"
            content="kenja, anime, character, {year}, {season.toLowerCase()}, search, recommendation, similar, image, vector search, image search, similarity search, easy search"
        />
    {/if}
</svelte:head>

<div class="py-20">
    <div class="hero w-full">
        <h1 class="text-secondary font-semibold text-3xl mb-10">
            {#if lang === Lang.Jp}
                アニメ　過去タイトル
            {:else}
                Anime Previous Titles
            {/if}
        </h1>
    </div>
    <ManualDocumentsBundle
        {lang}
        bundle={[
            {
                name: `${year} ${season}`,
                nameJapanese: `${yearJapanese}${seasonJapanese}`,
                list,
            },
        ]}
    />
    {#if backLink}
        <div class="text-center mt-10">
            <a href={backLink.link} class="link link-primary text-xl">
                {backLink.name}
            </a>
        </div>
    {/if}
</div>
