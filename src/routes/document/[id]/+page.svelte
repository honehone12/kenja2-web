<script lang="ts">
    'use strict';
    
    import MainDocument from '$lib/components/MainDocument.svelte';
    import ErrorMsg from '$lib/components/ErrorMsg.svelte';
    import LoadingDots from '$lib/components/LoadingDots.svelte';

    let {data} = $props();
</script>

<div class="min-h-screen w-full">
    {#await data.documentStream}
        <div class="hero">
            <div class="hero-content">
                <LoadingDots/>
            </div>    
        </div>
    {:then document}
        <MainDocument {document}/>
    {:catch}
        <div class="hero">
            <div class="hero-content">
                <ErrorMsg/>
            </div>
        </div>
    {/await}
</div>
