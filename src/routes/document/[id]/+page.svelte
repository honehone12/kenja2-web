<script lang="ts">
    'use strict';
    
    import MainDocument from '$lib/components/MainDocument.svelte';
    import ErrorMsg from '$lib/components/ErrorMsg.svelte';
    import LoadingDots from '$lib/components/LoadingDots.svelte';

    let {data} = $props();
</script>

{#await data.documentStream}
    <div class="min-h-screen w-full hero">
        <div class="hero-content">
            <LoadingDots/>
        </div>
    </div>
{:then document}
    <div class="min-h-screen w-full">
        <MainDocument {document}/>
    </div>
{:catch}
    <div class="min-h-screen w-full hero">
        <div class="hero-content">
            <ErrorMsg/>
        </div>
    </div>
{/await}
