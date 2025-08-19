<script lang="ts">
    import KeywordInput from "$lib/components/KeywordInput.svelte";
    import ItemTypeRadio from "$lib/components/ItemTypeRadio.svelte";
    import SafeSearchToggle from "$lib/components/SafeSearchToggle.svelte";
    import FuzzyBox from "$lib/components/FuzzyBox.svelte";
 
    interface Props {
        useFlexible: boolean;
        onsubmit: (() => void) | null;
    }
    
    let {useFlexible, onsubmit}: Props = $props();

    let safeSearch = $state(true);
</script>

<div>
    <form 
        method="get" 
        action="{safeSearch ? '' : '/kenja'}/textsearch/buffer"
        {onsubmit}
    >
        <KeywordInput {useFlexible} usePink={!safeSearch}/>    
        <div class="mt-5 ml-5">
            <FuzzyBox usePink={!safeSearch}/>
        </div>
        <div class="mt-5 ml-5">
            <h2 class="text-2xl mb-3 tooltip" data-tip="Select items to search">Item Type</h2>
            <ItemTypeRadio useAll={true} usePink={!safeSearch}/>
        </div>
    </form>
    <div class="mt-5 ml-5">
        <SafeSearchToggle bind:safeSearch/>
    </div>
</div>