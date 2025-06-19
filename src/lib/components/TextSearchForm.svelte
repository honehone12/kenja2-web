<script lang="ts">
    'use strict';
    
    import KeywordInput from "$lib/components/KeywordInput.svelte";
    import ItemTypeRadio from "$lib/components/ItemTypeRadio.svelte";
</script>

<form method="get" action="/search/buffer/text">
    <KeywordInput/>
    <div class="mt-5 ml-5">
        <ItemTypeRadio/>
    </div>
</form>
