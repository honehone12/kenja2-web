<script lang="ts">
    'use strict';

    import ItemTypeRadio from "$lib/components/ItemTypeRadio.svelte";
    import VectorFieldRadio from "$lib/components/VectorFieldRadio.svelte";

    interface Props {
        id: string;
    }

    let {id}: Props = $props();
</script>

<form method="get" action="/search/buffer/vector">
    <input type="hidden" id="id" name="id" value="{id}">
    <div class="mb-10">
        <h2 class="text-2xl mb-3">Item type</h2>
        <ItemTypeRadio useUnspecified={false}/>
    </div>
    <div class="mb-10">
        <h2 class="text-2xl mb-3">Source vector</h2>
        <VectorFieldRadio name="source"/>
    </div>
    <div class="mb-10">
        <h2 class="text-2xl mb-3">Target vector</h2>
        <VectorFieldRadio name="target"/>
    </div>
    <button 
        type="submit"
        class="btn btn-xl btn-secondary"
    >
        Let's go !
    </button>
</form>
