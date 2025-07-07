<script lang="ts">
    'use strict';
    
    import MainDocument from '$lib/components/MainDocument.svelte';
    import ErrorMsg from '$lib/components/ErrorMsg.svelte';
    import LoadingMsg from '$lib/components/LoadingMsg.svelte';

    let {data} = $props();

    async function resolveOne() {
        const {documents} = await data.documentStream;
        return documents ? documents[0] : undefined;
    }
</script>

{#await resolveOne()}
    <div class="min-h-screen w-full hero">
        <div class="hero-content">
            <LoadingMsg/>
        </div>
    </div>
{:then doc}
    {#if doc}
        <div class="min-h-screen w-full">
            <MainDocument 
                {doc}
            />
        </div>
    {:else}
        <div class="min-h-screen w-full hero">
            <div class="hero-content">
                <h2 class="text-xl">No infomations</h2>
            </div>
        </div>
    {/if}
{:catch}
    <div class="min-h-screen w-full hero">
        <div class="hero-content">
            <ErrorMsg/>
        </div>
    </div>
{/await}
