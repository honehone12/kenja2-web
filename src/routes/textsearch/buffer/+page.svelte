<script lang="ts">
    import {page} from '$app/state';
    import SearchResultBuffer from '$lib/components/SearchResultBuffer.svelte';

    let {data} = $props();

    function itemType() {
        const iType = page.url.searchParams.get('item-type'); 
        return iType ? iType : 'anime and character';
    }
</script>

<div class="text-center mt-20 mb-10">
    <h1 class="text-xl">Search result of {itemType()} with "{page.url.searchParams.get('keyword') ?? ''}"</h1>
</div>
<SearchResultBuffer buffer={data.bufferedStream}/>
