<script lang="ts">
    'use strict';

    import ItemTypeRadio from "./ItemTypeRadio.svelte";
    import VectorFieldRadio from "./VectorFieldRadio.svelte";
</script>

<form method="get" action="/search/buffer/vector">
    <div class="mb-10">
        <h2 class="text-2xl mb-3">Item type</h2>
        <ItemTypeRadio/>
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
