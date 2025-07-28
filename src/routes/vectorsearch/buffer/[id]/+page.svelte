<script lang="ts">
    import {page} from "$app/state";
    import SearchResultBuffer from '$lib/components/SearchResultBuffer.svelte';

    let {data} = $props();

    function itemType() {
        const iType = page.url.searchParams.get('item-type'); 
        return iType ? iType : 'item';
    }

    function vectorType() {
        const vType = page.url.searchParams.get('vector'); 
        return vType ? vType : 'vector';
    }
</script>

<div class="text-center mt-20 mb-10">
    <h1 class="text-xl">Similar {itemType()} with "{page.url.searchParams.get('name') ?? ''}" ({vectorType()})</h1>
</div>
<SearchResultBuffer buffer={data.bufferedStream}/>
