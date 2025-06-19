<script lang="ts">
    'use strict';
    
    import SearchResultBuffer from '$lib/pages/SearchResultBuffer.svelte';

    let {data} = $props();
</script>

<SearchResultBuffer buffer={data.bufferedStream}/>
