<script lang="ts">
    import { Lang } from "$lib";
    import TopPageFeatures from "$lib/components/TopPageFeatures.svelte";
    import TextSearchForm from "$lib/components/TextSearchForm.svelte";
    
    interface Props {
        lang: Lang;
    }

    let {lang}: Props = $props();
</script>

<div class="py-20">
    <div class="hero w-full">
        <div class="hero-content flex flex-col">
            <figure>
                <img
                    src="/kenja2_logo.png"
                    alt="{lang === Lang.Jp ? 'ケンジャニメのロゴ、賢者のイラスト' : 'Kenjanime Logo, Illustration of Wise Old Man'}"
                    class="size-40 mb-10" 
                />
            </figure>
            <span class="text-center">
                <h1 class="text-5xl text-secondary font-semibold mb-10">
                    {#if lang === Lang.Jp}
                        ケンジャニメ
                    {:else}
                        Kenjanime
                    {/if}
                </h1>
                <h2 class="text-2xl mb-5">
                    {#if lang === Lang.Jp}
                        アニメの検索とおすすめ
                    {:else}
                        Anime search and Recommendation
                    {/if}
                </h2>
                <p>
                    {#if lang === Lang.Jp}
                        細かいクエリは無しの簡単操作。<br>
                        画像をポチポチ押すだけで色々見つかる。<br>
                        ログイン不要。パーソナライズ無し。<br>
                        もちろん無料。
                    {:else}        
                        Easy to Use without Detailed Queries.<br>
                        Find Many with Just Clicking through Images.<br>
                        No Login Required. Non-personalized.<br>
                        Of Course It's Free. 
                    {/if}
                </p>
            </span>
        </div>
    </div>
    <div class="hero w-full mt-10">
        <div class="hero-content">
            <TextSearchForm 
                {lang}
                useFlexible={true} 
                onsubmit={null}
            />
        </div>
    </div>
    <TopPageFeatures {lang}/>
</div>
