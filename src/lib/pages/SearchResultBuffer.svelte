<script lang="ts">
    'use strict';
    
    import ErrorMsg from "$lib/components/ErrorMsg.svelte";
    import LoadingDots from "$lib/components/LoadingDots.svelte";
    import type { QueryResult } from "$lib/documents/queries";
    import {fmtItemLen} from "$lib/display/fmt";

    interface Props {
        buffer: Promise<QueryResult>
    }

    let {buffer}: Props = $props();
</script>

<div class="hero h-full w-full">
    <div class="hero-content">
        {#await buffer}
            <LoadingDots/>
        {:then {candidates}}
            <h1 class="mt-3 text-2xl">{fmtItemLen(candidates?.length)}</h1>
            {#if candidates}
                {#each candidates as c}
                
                {/each}
            {/if}
        {:catch}
            <ErrorMsg/>
        {/await}
    </div>
</div>
