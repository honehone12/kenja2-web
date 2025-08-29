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
                <h1 class="text-5xl text-secondary mb-10">ケンジャ</h1>
            {:else}
                <h1 class="text-5xl text-secondary mb-10">Kenja</h1>
            {/if}
            <div class="text-center">
                {#if lang === Lang.Jp}
                    <p class="text-lg">
                        ケンジャは画像をポチポチ見ながら<br>
                        好きなアニメやキャラクターを探すウェブサイトです。
                    </p>
                {:else}
                    <p class="text-lg">
                        Kenja is a web site where you can search for your favorite anime and characters<br> 
                        by clicking through images.
                    </p>
                {/if}
                {#if lang === Lang.Jp}
                    <a href="/?lang=en" onclick={(e) => {
                        e.preventDefault();
                        window.location.href = '/?lang=en';
                    }}>
                        <p class="link link-primary mt-5">Do you prefer English?</p>
                    </a>
                {:else}
                    <a href="/?lang=ja" onclick={(e) => {
                        e.preventDefault();
                        window.location.href = '/?lang=ja';
                    }}>
                        <p class="link link-primary mt-2">日本語対応しました</p>
                    </a>
                {/if}
            </div>
        </div>
    </div>
    <TopPageFeatures {lang}/>
</div>
