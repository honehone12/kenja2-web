<script lang="ts">
    import { Lang } from "$lib";
    import TextSearchForm from "$lib/components/TextSearchForm.svelte";
    import historyCtrl from "$lib/client/history-conrol";
    import {
        remotePlaceholder,
        remoteRecommend,
    } from "$lib/functions/recommendation.remote";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import RootContents from "$lib/components/RootContents.svelte";
    import type { SearchResult } from "$lib/documents/anime-search/documents";
    import { onMount } from "svelte";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();
    let initializer:
        | Promise<{ isRecommended: boolean; result: SearchResult }>
        | undefined = $state();

    async function initialize() {
        const animeHist = await historyCtrl.getAnimeHistory();
        const isRecommended = animeHist.length > 0;
        if (isRecommended) {
            const params = {
                item_type: ItemType.Anime,
                ids: animeHist,
            };
            const result = await remoteRecommend(params);
            return { isRecommended, result };
        } else {
            const result = await remotePlaceholder();
            return { isRecommended, result };
        }
    }

    onMount(() => {
        initializer = initialize();
    });
</script>

<main class="py-20">
    <div class="hero w-full">
        <div class="hero-content flex flex-col">
            <figure>
                <img
                    src="/kenja2-logo.png"
                    alt={lang === Lang.Jp
                        ? "ケンジャニメのロゴ、賢者のイラスト"
                        : "Kenjanime Logo, Illustration of Wise Old Man"}
                    class="size-40 mb-10"
                />
            </figure>
            <span class="text-center">
                <h2 class="text-lg text-secondary mb-3">
                    {#if lang === Lang.Jp}
                        アニメとキャラクターの<br />
                        AI画像ベクトル検索エンジン
                    {:else}
                        Anime and Character<br />
                        AI Image Vector Search Engine
                    {/if}
                </h2>
                <h1 class="text-5xl text-secondary font-bold mb-13">
                    {#if lang === Lang.Jp}
                        ケンジャニメ
                    {:else}
                        Kenjanime
                    {/if}
                </h1>
                <div class="mb-10">
                    <a href={lang === Lang.Jp ? "/ai?lang=ja" : "/ai"}>
                        <button class="btn btn-xl btn-accent">
                            {lang === Lang.Jp
                                ? "ローカルAI画像検索を試す"
                                : "Try Local AI Image Search"}
                        </button>
                    </a>
                </div>
                <h2 class="text-2xl font-semibold mb-5">
                    {#if lang === Lang.Jp}
                        アニメの検索とおすすめ
                    {:else}
                        Anime Search and Recommendation
                    {/if}
                </h2>
                <span>
                    {#if lang === Lang.Jp}
                        <h3 class="mb-3">細かいクエリは無しの簡単操作。</h3>
                        <h3 class="mb-3">
                            画像をポチポチ押すだけで<br />
                            あなた好みのアニメが色々見つかります。
                        </h3>
                        <h3 class="mb-3">
                            ランダム生成機能で<br />
                            魅力的なキャラクターを新発見しよう。
                        </h3>
                        <h3 class="mb-3">
                            お気に入りはマイリストに保存できます。
                        </h3>
                        <h3>１００％ブラウザで動くAI画像検索。</h3>
                    {:else}
                        <h3 class="mb-3">
                            Easy to Use without Detailed Queries.
                        </h3>
                        <h3 class="mb-3">
                            Find a Variety of Anime that You'll Love, <br />
                            with Just Clicking through Images.
                        </h3>
                        <h3 class="mb-3">
                            Discover New Fascinating Characters, <br />
                            With the Random Generation Function.
                        </h3>
                        <h3 class="mb-3">
                            You can Save Your Favorites to "My List".
                        </h3>
                        <h3>
                            Image Search with AI <br />
                            that runs entirely in the browser.
                        </h3>
                    {/if}
                </span>
            </span>
        </div>
    </div>
    <div class="hero w-full mt-10 mb-10">
        <div class="hero-content">
            <TextSearchForm {lang} useFlexible={true} onsubmit={null} />
        </div>
    </div>
    <RootContents {lang} {initializer} />
</main>
