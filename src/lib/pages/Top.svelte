<script lang="ts">
    import { Lang } from "$lib";
    import TopPageFeatures from "$lib/components/TopPageFeatures.svelte";
    import TextSearchForm from "$lib/components/TextSearchForm.svelte";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();
</script>

<div class="py-20">
    <div class="hero w-full">
        <div class="hero-content flex flex-col">
            <figure>
                <img
                    src="/kenja2_logo.png"
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
                        画像ベクトル検索エンジン
                    {:else}
                        Anime and character<br />
                        image vector search engine
                    {/if}
                </h2>
                <h1 class="text-5xl text-secondary font-bold mb-13">
                    {#if lang === Lang.Jp}
                        ケンジャニメ
                    {:else}
                        Kenjanime
                    {/if}
                </h1>
                <h2 class="text-2xl font-semibold mb-5">
                    {#if lang === Lang.Jp}
                        アニメの検索とおすすめ
                    {:else}
                        Anime Search and Recommendation
                    {/if}
                </h2>
                <span>
                    {#if lang === Lang.Jp}
                        <h3 class="mb-2">細かいクエリは無しの簡単操作。</h3>
                        <h3 class="mb-2">
                            画像をポチポチ押すだけで<br />
                            あなた好みのアニメが色々見つかります。
                        </h3>
                        <h3 class="mb-2">
                            ランダム生成機能で<br />
                            魅力的なキャラクターを新発見しよう。
                        </h3>
                        <h3>お気に入りはマイリストに保存できます。</h3>
                    {:else}
                        <h3 class="mb-2">
                            Easy to Use without Detailed Queries.
                        </h3>
                        <h3 class="mb-2">
                            Find a Variety of Anime that You'll Love, <br />
                            with Just Clicking through Images.
                        </h3>
                        <h3 class="mb-2">
                            Discover New Fascinating Characters, <br />
                            With the Random Generation Function.
                        </h3>
                        <h3>You can Save Your Favorites to "My List".</h3>
                    {/if}
                </span>
            </span>
        </div>
    </div>
    <div class="hero w-full mt-10">
        <div class="hero-content">
            <TextSearchForm {lang} useFlexible={true} onsubmit={null} />
        </div>
    </div>
    <TopPageFeatures {lang} />
</div>
