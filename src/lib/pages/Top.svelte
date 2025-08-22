<script lang="ts">
    import { Lang } from "$lib";
    import TopPageFeatures from "$lib/components/TopPageFeatures.svelte";

    interface Props {
        lang: Lang
    }

    let {lang}: Props = $props();
</script>

<div class="py-20">
    <div class="hero w-full">
        <div class="hero-content flex flex-col">
            <figure>
                <img
                    src="/kenja2_logo.png"
                    alt="Kenja logo with illustration of wise man"
                    class="size-40 mb-10" 
                />
            </figure>
            {#if lang === Lang.Jp}
                <h1 class="text-5xl text-info mb-10">ケンジャ</h1>
            {:else}
                <h1 class="text-5xl text-info mb-10">Kenja</h1>
            {/if}
            <div class="text-center">
                {#if lang === Lang.Jp}
                    <p class="text-lg">
                        ケンジャは画像をポチポチ見ながら好きなアニメやキャラクターを探すウェブサイトです。<br>
                    </p>
                {:else}
                    <p class="text-lg">
                        Kenja is a web site where you can search for your favorite anime and characters<br> 
                        by clicking through images.
                    </p>
                {/if}
                <a href="/about">
                    <p class="link link-primary text-lg mt-5">For more infomations</p>
                </a>
                <a href="/textsearch">
                    <p class="link link-primary text-lg mt-2">Search with your keywords</p>
                </a>
            </div>
        </div>
    </div>
    <TopPageFeatures/>
</div>
