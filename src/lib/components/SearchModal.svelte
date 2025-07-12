<script lang="ts">
    import {SEARCH_MODAL_ID} from "$lib";
    import TextSearchForm from "./TextSearchForm.svelte";

    interface Props {
        onclickClose: () => void
    }

    let {onclickClose}: Props = $props();
</script>

<dialog id="{SEARCH_MODAL_ID}" class="modal">
    <div class="modal-box flex flex-col items-center">
        <form method="dialog">
            <button 
                class="btn btn-info btn-outline btn-circle absolute right-2 top-2"
                onclick={onclickClose}
            >x</button>
        </form>
        <div class="modal-action mt-20 mb-10">
            <TextSearchForm isLandingPage={false}/>
        </div>
    </div>
</dialog>
