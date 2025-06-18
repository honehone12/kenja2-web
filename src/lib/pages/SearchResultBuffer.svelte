<script lang="ts">
    'use strict';
    
    import ErrorMsg from "$lib/components/ErrorMsg.svelte";
    import LoadingDots from "$lib/components/LoadingDots.svelte";
    import type { QueryResult } from "$lib/documents/queries";

    import CandidateCard from "$lib/components/CandidateCard.svelte";

    interface Props {
        buffer: Promise<QueryResult>
    }

    let {buffer}: Props = $props();
</script>

<div class="hero min-h-screen w-full">
    {#await buffer}
        <div class="hero-content">
            <LoadingDots/>
        </div>
    {:then {candidates}}
        {#if candidates}
            <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
                {#each candidates as candidate}
                    <CandidateCard {candidate} />
                {/each}
            </div>
        {:else}
            <h2 class="hero-content text-xl">No Results</h2>
        {/if}
    {:catch}
        <ErrorMsg/>
    {/await}    
</div>
