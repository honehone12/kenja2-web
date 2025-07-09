<script lang="ts">
    'use strict';
    
    import SearchResultBuffer from '$lib/components/SearchResultBuffer.svelte';

    let {data} = $props();
</script>

<SearchResultBuffer buffer={data.bufferedStream}/>
