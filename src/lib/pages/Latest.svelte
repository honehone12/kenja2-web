<script lang="ts">
    import { Lang } from "$lib";
    import ManualDocuments from "$lib/components/ManualDocuments.svelte";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import Meta from "$lib/meta/Meta.svelte";

    interface Props {
        lang: Lang;
        year: string;
        yearJapanese: string;
        season: string;
        seasonJapanese: string;
        list: FlatDocument[];
    }

    let { lang, year, yearJapanese, season, seasonJapanese, list }: Props =
        $props();

    const title = "Kenjanime - Latest Anime";
    const titleJapanese = "ケンジャニメ - 最新のアニメ";

    function descriptionJapanese() {
        return `アニメ & キャラクターの検索とAI画像ベクターサーチによるおすすめ。最新のアニメ。${yearJapanese}${seasonJapanese}シーズン人気アニメの一覧です。`;
    }

    function description() {
        return `Anime & character search and recommendation powered by AI image vector search. Latest Anime. A list of popular anime in ${year} ${season} Season.`;
    }

    function keywords() {
        return `kenja, anime, character, ai, latest, ${year}, ${season.toLowerCase()}, search, recommendation, similar, image, ai search, vector search, image search, similarity search, easy search`;
    }

    function keywordsJapanese() {
        return `ケンジャ, アニメ, キャラクター, AI, 最新, ${yearJapanese}, ${seasonJapanese}, 検索, おすすめ, 似ている, 画像, AI検索, ベクトル検索, 画像検索, 類似検索, 簡単検索`;
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
    <div class="w-full">
        <div class="text-center mx-5 mb-10">
            <h1 class="text-secondary font-semibold text-3xl mb-10">
                {#if lang === Lang.Jp}
                    最新アニメ
                {:else}
                    Latest Anime
                {/if}
            </h1>
            <p>
                {#if lang === Lang.Jp}
                    私がイッキ見派のため、１シーズン遅れて追加されます。<br />
                    ２０２５年秋アニメは冬頃追加予定です。
                {:else}
                    Since I'm a binge-watcher, the new season will be added one
                    season late. <br />
                    The Fall 2025 anime will be added in early winter.
                {/if}
            </p>
        </div>
    </div>
    <ManualDocuments
        {lang}
        name="{year} {season}"
        nameJapanese="{yearJapanese}{seasonJapanese}"
        documents={list}
    />
    <div class="text-center mt-10">
        <a href="/archive/2025/spring{lang === Lang.Jp ? '?lang=ja' : ''}">
            <h3 class="link link-primary text-xl">
                {#if lang === Lang.Jp}
                    ２０２５年春アニメはこちら
                {:else}
                    2025 Spring Season Anime
                {/if}
            </h3>
        </a>
    </div>
    <div class="text-center mt-10">
        <a href="/archive/2025/winter{lang === Lang.Jp ? '?lang=ja' : ''}">
            <h3 class="link link-primary text-xl">
                {#if lang === Lang.Jp}
                    ２０２５年冬アニメはこちら
                {:else}
                    2025 Winter Season Anime
                {/if}
            </h3>
        </a>
    </div>
</main>
