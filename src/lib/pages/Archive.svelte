<script lang="ts">
    import { Lang } from "$lib";
    import ManualDocumentsBundle from "$lib/components/ManualDocumentsBundle.svelte";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";

    interface BackLink {
        link: string;
        linkJapanese: string;
        name: string;
        nameJapanese: string;
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

    const title = "Kenjanime - Previous Anime";
    const titleJapanese = "ケンジャニメ - 過去のアニメ";

    function descriptionJapanese() {
        return `アニメ & キャラクターの検索と画像ベクターサーチによるおすすめシステム。過去のアニメ。${yearJapanese}${seasonJapanese}シーズン人気アニメの一覧です。`;
    }

    function description() {
        return `Anime & character search and recommendation powered by image vector search. Previous Anime. A list of popular anime in ${year} ${season} Season.`;
    }
</script>

<svelte:head>
    {#if lang === Lang.Jp}
        <title>{titleJapanese}</title>
        <meta name="description" content={descriptionJapanese()} />
        <meta
            name="keywords"
            content="ケンジャ, アニメ, キャラクター, {yearJapanese}, {seasonJapanese}, 検索, おすすめ, 似ている, 画像, ベクトル検索, 画像検索, 類似検索, 簡単検索"
        />
        <meta property="og:title" content={titleJapanese} />
        <meta property="og:description" content={descriptionJapanese()} />
    {:else}
        <title>{title}</title>
        <meta name="description" content={description()} />
        <meta
            name="keywords"
            content="kenja, anime, character, {year}, {season.toLowerCase()}, search, recommendation, similar, image, vector search, image search, similarity search, easy search"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description()} />
    {/if}
</svelte:head>

<div class="py-20">
    <div class="hero w-full">
        <h1 class="text-secondary font-semibold text-3xl mb-10">
            {#if lang === Lang.Jp}
                アニメ 過去タイトル
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
            <a
                href={lang === Lang.Jp ? backLink.linkJapanese : backLink.link}
                class="link link-primary text-xl"
            >
                {lang === Lang.Jp ? backLink.nameJapanese : backLink.name}
            </a>
        </div>
    {/if}
</div>
