<script lang="ts">
    import { Lang } from "$lib";
    import ManualDocumentsBundle from "$lib/components/ManualDocumentsBundle.svelte";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";

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
        return `アニメ & キャラクターの検索と画像ベクターサーチによるおすすめシステム。最新のアニメ。${yearJapanese}${seasonJapanese}シーズン人気アニメの一覧です。`;
    }

    function description() {
        return `Anime & character search and recommendation powered by image vector search. Latest Anime. A list of popular anime in ${year} ${season} Season.`;
    }
</script>

<svelte:head>
    {#if lang === Lang.Jp}
        <title>{titleJapanese}</title>
        <meta name="description" content={descriptionJapanese()} />
        <meta
            name="keywords"
            content="ケンジャ, アニメ, キャラクター, 最新, {yearJapanese}, {seasonJapanese}, 検索, おすすめ, 似ている, 画像, ベクトル検索, 画像検索, 類似検索, 簡単検索"
        />
        <meta property="og:title" content={titleJapanese} />
        <meta property="og:description" content={descriptionJapanese()} />
    {:else}
        <title>{title}</title>
        <meta name="description" content={description()} />
        <meta
            name="keywords"
            content="kenja, anime, character, latest, {year}, {season.toLowerCase()}, search, recommendation, similar, image, vector search, image search, similarity search, easy search"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description()} />
    {/if}
</svelte:head>

<div class="py-20">
    <div class="hero w-full">
        <span class="text-center">
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
        </span>
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
</div>
