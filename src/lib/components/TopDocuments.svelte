<script lang="ts">
    import type { Lang } from "$lib";
import CandidateCard from "$lib/components/CandidateCard.svelte";
import type {FlatDocument} from "$lib/documents/anime-search/documents"

interface Props {
    name: string;
    list: FlatDocument[];
    useBlur: boolean;
    lang: Lang
}

let {name, list, useBlur, lang}: Props = $props();
</script>

<div class="hero w-full">
    <div class="hero-content card border border-neutral-500 text-center min-w-80 p-5 my-10 mx-5">
        <h2 class="text-xl">{name}</h2>
    </div>
</div>
<div class="hero w-full">
    <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
        {#each list as doc}
            <CandidateCard
                {doc}
                {useBlur}
                {lang}
            />
        {/each}
    </div>
</div>
