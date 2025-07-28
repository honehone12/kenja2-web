<script lang="ts">
    import SearchResultBuffer from '$lib/components/SearchResultBuffer.svelte';

    let {data} = $props();
</script>

<SearchResultBuffer buffer={data.bufferedStream} isVector={true}/>
