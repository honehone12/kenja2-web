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
            <div class="hero-content flex flex-col my-10">
                {#each candidates as candidate}
                    <div class="my-5">
                        <CandidateCard {candidate} />
                    </div>
                {/each}
            </div>    
        {/if}
    {:catch}
        <ErrorMsg/>
    {/await}    
</div>
