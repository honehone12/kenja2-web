<script lang="ts">
    'use strict';
    
    import { DOCUMENT_MODAL_ID } from "$lib";
    import VectorSearchForm from "$lib/components/VectorSearchForm.svelte";

    interface Props {
        id: string | null;
        itemType: string | null; 
        onclickClose: () => void;
    }

    let {
        id,
        itemType,
        onclickClose
    }: Props = $props(); 
</script>

<dialog id="{DOCUMENT_MODAL_ID}" class="modal">
    <div class="modal-box flex flex-col place-items-center">
        <div>
            <h1 class="text-3xl mt-5">Find similar items</h1>
        </div>
        <div class="modal-action">    
            <VectorSearchForm
                {id}
                {itemType}
            />
        </div>
        <div>
            <form class="modal-backdrop mt-10" method="dialog">
                <button
                    class="btn btn-outline btn-info w-80"
                    onclick={onclickClose}
                >Close</button>
            </form>
        </div>
    </div>
</dialog>
