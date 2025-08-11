<script lang="ts">
    import KeywordInput from "$lib/components/KeywordInput.svelte";
    import ItemTypeRadio from "$lib/components/ItemTypeRadio.svelte";
    import RatingToggle from "$lib/components/RatingToggle.svelte";
    import FuzzyBox from "$lib/components/FuzzyBox.svelte";

    interface Props {
        useFlexible: boolean;
        useKenjaMode: boolean;
    }
    
    let {useFlexible, useKenjaMode}: Props = $props();
    let kenjaMode = $state(false);
</script>

<form method="get" action="/textsearch/buffer">
    <KeywordInput {useFlexible} usePink={kenjaMode}/>
    {#if useKenjaMode}
        <div class="mt-5 ml-5">
            <RatingToggle bind:kenjaMode/>
        </div>
    {/if}
    <div class="mt-5 ml-5">
        <FuzzyBox/>
    </div>
    <div class="mt-5 ml-5">
        <h2 class="text-2xl mb-3 tooltip" data-tip="Select items to search">Item type</h2>
        <ItemTypeRadio useAll={true} usePink={kenjaMode}/>
    </div>
</form>
