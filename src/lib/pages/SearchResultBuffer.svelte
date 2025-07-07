<script lang="ts">
    'use strict';
    
    import ErrorMsg from "$lib/components/ErrorMsg.svelte";
    import LoadingMsg from "$lib/components/LoadingMsg.svelte";
    import type { SearchResult } from "$lib/documents/anime-search/documents";
    import CandidateCard from "$lib/components/CandidateCard.svelte";

    interface Props {
        buffer: Promise<SearchResult>;
    }

    let {buffer}: Props = $props();
</script>

<div class="hero min-h-screen w-full">
    {#await buffer}
        <div class="hero-content">
            <LoadingMsg/>
        </div>
    {:then {documents}}
        {#if documents}
            <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
                {#each documents as doc}
                    <CandidateCard
                        doc={{
                            id: doc.id,
                            parent: doc.parent,
                            name: doc.name,
                            name_japanese: doc.name_japanese
                        }}
                    />
                {/each}
            </div>
        {:else}
            <h2 class="hero-content text-xl">No results</h2>
        {/if}
    {:catch}
        <div class="hero-content">
            <ErrorMsg/>
        </div>
    {/await}    
</div>
