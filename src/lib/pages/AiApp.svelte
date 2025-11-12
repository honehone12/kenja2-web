<script lang="ts">
    import { goto } from "$app/navigation";
    import { Lang } from "$lib";
    import ai from "$lib/client/ai/ai";
    import AiImageSearchForm from "$lib/components/AiImageSearchForm.svelte";
    import { onMount } from "svelte";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();
    let initializer: (() => Promise<void>) | undefined = $state();

    async function initialize() {
        await ai.init();
    }

    async function onsubmit(file: File, itemType: string) {
        const vector = await ai.generateVector(file);
        const searchUrl = `/direct-vectorsearch/buffer?item-type=${itemType}&vector=${vector}${lang === Lang.Jp ? "&lang=ja" : ""}`;
        goto(searchUrl);
    }

    onMount(() => {
        initializer = initialize;
    });
</script>

<main class="w-full min-h-screen py-20 px-10">
    <span class="text-center">
        <h1 class="text-secondary font-semibold text-3xl mb-10">
            {#if lang === Lang.Jp}
                ローカルAI画像検索
            {:else}
                Local AI Image Search
            {/if}
        </h1>
    </span>
    <div class="hero">
        <div class="hero-content">
            <figure>
                <img
                    src="/kenja2-logo.png"
                    alt={lang === Lang.Jp
                        ? "ケンジャニメのロゴ、賢者のイラスト"
                        : "Kenjanime Logo, Illustration of Wise Old Man"}
                    class="size-40 mb-10"
                />
            </figure>
        </div>
    </div>
    <div class="hero">
        <div class="hero-content">
            <AiImageSearchForm {lang} {initializer} {onsubmit} />
        </div>
    </div>
</main>
