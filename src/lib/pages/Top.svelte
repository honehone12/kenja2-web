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
                    alt="{lang === Lang.Jp ? 'ケンジャのロゴ、賢者のイラスト' : 'Kenja Logo, Illustration of Wise Old Man'}"
                    class="size-40 mb-10" 
                />
            </figure>
            <h1 class="text-5xl text-secondary font-semibold mb-10">
                {#if lang === Lang.Jp}
                    ケンジャ
                {:else}
                    Kenja
                {/if}
            </h1>
            <div class="text-center">
                <p class="text-lg">
                    {#if lang === Lang.Jp}
                        ケンジャは画像をポチポチ見ながら<br>
                        好きなアニメやキャラクターを探すウェブサイトです。
                    {:else}        
                        Kenja is a web site where you can search for your favorite anime and characters<br> 
                        by clicking through images.    
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
