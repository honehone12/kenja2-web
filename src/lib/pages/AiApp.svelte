<script lang="ts">
    import { goto } from "$app/navigation";
    import { Lang } from "$lib";
    import ai from "$lib/client/ai/ai";
    import AiImageSearchForm from "$lib/components/AiImageSearchForm.svelte";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();

    async function initialize() {
        await ai.init();
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
            <AiImageSearchForm {lang} {initialize} {onsubmit} />
        </div>
    </div>
</main>
