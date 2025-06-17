<script lang="ts">
    import SearchResultBuffer from '$lib/pages/SearchResultBuffer.svelte';

    'use strict';

    let {data} = $props();
</script>

<SearchResultBuffer buffer={data.bufferedStream}/>
