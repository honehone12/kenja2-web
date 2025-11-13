<script lang="ts">
    import { Lang } from "$lib";
    import ManualDocuments from "$lib/components/ManualDocuments.svelte";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import Meta from "$lib/meta/Meta.svelte";

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
        return `アニメ & キャラクターの検索とAI画像ベクターサーチによるおすすめシステム。過去のアニメ。${yearJapanese}${seasonJapanese}シーズン人気アニメの一覧です。`;
    }

    function description() {
        return `Anime & character search and recommendation powered by AI image vector search. Previous Anime. A list of popular anime in ${year} ${season} Season.`;
    }

    function keywords() {
        return `kenja, anime, character, ${year}, ${season.toLowerCase()}, ai, search, recommendation, similar, image, ai search, vector search, image search, similarity search, easy search`;
    }

    function keywordsJapanese() {
        return `ケンジャ, アニメ, キャラクター, ${yearJapanese}, ${seasonJapanese}, AI, 検索, おすすめ, 似ている, 画像, AI検索, ベクトル検索, 画像検索, 類似検索, 簡単検索`;
    }
</script>

<Meta
    {lang}
    {title}
    {titleJapanese}
    description={description()}
    descriptionJapanese={descriptionJapanese()}
    keywords={keywords()}
    keywordsJapanese={keywordsJapanese()}
/>

<main class="py-20">
    <div class="hero w-full mb-10">
        <h1 class="text-secondary font-semibold text-3xl">
            {#if lang === Lang.Jp}
                アニメ 過去タイトル
            {:else}
                Anime Previous Titles
            {/if}
        </h1>
    </div>
    <ManualDocuments
        {lang}
        name="{year} {season}"
        nameJapanese="{yearJapanese}{seasonJapanese}"
        documents={list}
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
</main>
