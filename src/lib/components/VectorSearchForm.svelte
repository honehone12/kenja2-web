<script lang="ts">
    'use strict';

    import ItemTypeRadio from "./ItemTypeRadio.svelte";
</script>

<form method="get" action="/search/buffer/vector">
    <ItemTypeRadio/>

    <button 
        type="submit"
        class="btn btn-xl btn-secondary mt-10"
    >
        Let's go !
    </button>
</form>
