<script lang="ts">
    import KeywordInput from "$lib/components/KeywordInput.svelte";
    import ItemTypeRadio from "$lib/components/ItemTypeRadio.svelte";

    interface Props {
        isLandingPage: boolean;
    }

    let {isLandingPage}: Props = $props();
</script>

<form method="get" action="/search/buffer/text">
    <KeywordInput {isLandingPage}/>
    <div class="mt-5 ml-5">
        <h2 class="text-2xl mb-3">Item type</h2>
        <ItemTypeRadio useUnspecified={true}/>
    </div>
</form>
