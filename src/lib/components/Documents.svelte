<script lang="ts">
    import type { Lang } from "$lib";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import CandidateCard from "$lib/components/CandidateCard.svelte";

    interface Props {
        lang: Lang;
        documents: FlatDocument[];
    }

    let { lang, documents }: Props = $props();
</script>

<div class="hero w-full">
    <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
        {#each documents as doc, i (i)}
            <CandidateCard {lang} {doc} />
        {/each}
    </div>
</div>
