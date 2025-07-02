<script lang="ts">
    'use strict';

    import VectorFieldRadio from "$lib/components/VectorFieldRadio.svelte";

    interface Props {
        id: string;
        item_type: string
    }

    let {id, item_type}: Props = $props();
</script>

<form method="get" action="/search/buffer/vector">
    <input type="hidden" id="id" name="id" value="{id}">
    <input type="hidden" id="item-type" name="item-type" value="{item_type}"/>
    <div class="mb-10">
        <h2 class="text-2xl mb-3">Select source</h2>
        <VectorFieldRadio name="vector"/>
    </div>
    <button 
        type="submit"
        class="btn btn-xl btn-accent"
    >
        Search
    </button>
</form>
