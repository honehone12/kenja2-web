<script lang="ts">
    import { SearchType } from "$lib/client/search.js";
    import SearchResultBuffer from "$lib/pages/SearchResultBuffer.svelte";

    let { data } = $props();
</script>

<svelte:head></svelte:head>

<SearchResultBuffer
    lang={data.lang}
    buffer={data.bufferedStream}
    searchType={SearchType.Random}
/>
