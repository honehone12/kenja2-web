<script lang="ts">
    import VectorFieldRadio from "$lib/components/VectorFieldRadio.svelte";

    interface Props {
        id: string | null;
        itemType: string | null;
    }

    let {id, itemType}: Props = $props();
</script>

<form method="get" action="/vectorsearch/buffer/{id ?? ''}">
    <input type="hidden" id="item-type" name="item-type" value="{itemType ?? ''}"/>
    <div class="mb-5">
        <h2 class="text-2xl mb-5">Select source</h2>
        <VectorFieldRadio name="vector"/>
    </div>
    <button 
        type="submit"
        class="btn btn-accent w-80"
    >
        Search
    </button>
</form>
