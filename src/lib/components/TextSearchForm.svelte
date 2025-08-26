<script lang="ts">
    import KeywordInput from "$lib/components/KeywordInput.svelte";
    import ItemTypeRadio from "$lib/components/ItemTypeRadio.svelte";
    import FuzzyBox from "$lib/components/FuzzyBox.svelte";
 
    interface Props {
        useFlexible: boolean;
        onsubmit: (() => void) | null;
    }
    
    let {useFlexible, onsubmit}: Props = $props();
</script>

<div>
    <form 
        method="get" 
        action="/textsearch/buffer"
        {onsubmit}
    >
        <KeywordInput {useFlexible}/>    
        <div class="mt-5 ml-5">
            <FuzzyBox/>
        </div>
        <div class="mt-5 ml-5">
            <h2 class="text-2xl mb-3 tooltip" data-tip="Select items to search">Item Type</h2>
            <ItemTypeRadio useAll={true}/>
        </div>
    </form>
</div>