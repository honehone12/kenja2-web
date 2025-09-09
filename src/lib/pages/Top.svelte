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
            <h1 class="text-5xl text-secondary font-semibold mb-10">
                {#if lang === Lang.Jp}
                    ケンジャニメ
                {:else}
                    Kenjanime
                {/if}
            </h1>
            <div class="text-center mx-5">
                <p>
                    {#if lang === Lang.Jp}
                        ログイン不要。<br>
                        細かいクエリは無しの簡単操作。<br>
                        画像をポチポチ見ながら、好きなアニメやキャラクターを探す。<br>
                        パーソナライズされないレコメンデーションシステム。
                    {:else}        
                        No login required.<br>
                        Easy to use without detailed queries.<br>
                        Find your favorite anime and characters by clicking through images.<br>
                        Non-personalized recommendation system.  
                    {/if}
                </p>
            </div>
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
