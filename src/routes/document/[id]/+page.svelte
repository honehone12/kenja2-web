<script lang="ts">
    'use strict';
    
    import ErrorMsg from '$lib/components/ErrorMsg.svelte';
    import LoadingDots from '$lib/components/LoadingDots.svelte';

    let {data} = $props();
</script>

<div class="hero min-h-screen w-full">
    {#await data.documentStream}
        <div class="hero-content">
            <LoadingDots/>
        </div>
    {:then document}
        <div class="hero-content">
            {document.url}
        </div>
    {:catch}
        <div class="hero-content">
            <ErrorMsg/>
        </div>
    {/await}
</div>
