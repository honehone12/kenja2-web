<script lang="ts">
    import {SEARCH_MODAL_ID} from "$lib";
    import TextSearchForm from "./TextSearchForm.svelte";

    interface Props {
        useKenjaToggle: boolean;
        onclickClose: () => void;
    }

    let {useKenjaToggle, onclickClose}: Props = $props();
</script>

<dialog id="{SEARCH_MODAL_ID}" class="modal">
    <div class="modal-box flex flex-col items-center outline outline-cyan-500">
        <form method="dialog">
            <button 
                class="btn btn-sm btn-info btn-outline btn-circle absolute right-2 top-2"
                onclick={onclickClose}
            >X</button>
        </form>
        <span class="mt-20">
            <h2 class="text-2xl">
                Anime Kenja Search
            </h2>
        </span>
        <div class="modal-action mt-10 mb-10">
            <TextSearchForm useFlexible={false} {useKenjaToggle}/>
        </div>
    </div>
</dialog>
