<script lang="ts">
    import KeywordInput from "$lib/components/KeywordInput.svelte";
    import ItemTypeRadio from "$lib/components/ItemTypeRadio.svelte";

    interface Props {
        useFlexible: boolean;
    }

    let {useFlexible}: Props = $props();
</script>

<form method="get" action="/textsearch/buffer">
    <KeywordInput {useFlexible}/>
    <div class="mt-5 ml-5">
        <h2 class="text-2xl mb-3 tooltip" data-tip="Select items to search">Item type</h2>
        <ItemTypeRadio includeAll={true}/>
    </div>
</form>
