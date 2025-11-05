<script lang="ts">
    import { goto } from "$app/navigation";
    import { Lang } from "$lib";
    import ai from "$lib/client/ai/ai";
    import AiImageSearchForm from "$lib/components/AiImageSearchForm.svelte";
    import LoadingMsg from "$lib/components/LoadingMsg.svelte";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();

    async function initialize() {
        await ai.init();
    }

    async function getDevice(): Promise<string> {
        const adapter = await navigator.gpu?.requestAdapter();
        const device = await adapter?.requestDevice();
        return adapter && device ? "GPU" : "CPU";
    }

    async function onsubmit(file: File, itemType: string) {
        const vector = await ai.generateVector(file);
        const path = `/direct-vectorsearch/buffer?item-type=${itemType}&vector=${vector}`;
        goto(path);
    }
</script>

<main class="w-full min-h-screen py-20 px-10">
    <span class="text-center">
        <h1 class="text-secondary font-semibold text-3xl mb-10">
            {#if lang === Lang.Jp}
                AI画像検索
            {:else}
                AI Image Search
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
            <div class="text-center text-secondary text-lg">
                {#await getDevice()}
                    <LoadingMsg />
                {:then device}
                    <p>
                        {#if lang === Lang.Jp}
                            使用する推論デバイス: {device}
                        {:else}
                            The inference device to use: {device}
                        {/if}
                    </p>
                {/await}
            </div>
        </div>
    </div>
    <div class="hero">
        <div class="hero-content">
            <AiImageSearchForm {lang} {initialize} {onsubmit} />
        </div>
    </div>
</main>
