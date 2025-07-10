<script lang="ts">
    'use strict';
    
    import { DOCUMENT_MODAL_ID } from "$lib";
    import VectorSearchForm from "$lib/components/VectorSearchForm.svelte";

    interface Props {
        id: string | null;
        url: string | null;
        itemType: string | null; 
        onclickClose: () => void;
    }

    let {
        id,
        url,
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
        {#if url}
            <div class="mt-8">
                <a href="{url}">
                    <h2 class="text-xl link link-primary">More infomations at MyAnimeList</h2>
                </a>
            </div>    
        {/if}
        <div>
            <form class="modal-backdrop mt-8" method="dialog">
                <button
                    class="btn btn-outline btn-info w-80"
                    onclick={onclickClose}
                >Close</button>
            </form>
        </div>
    </div>
</dialog>
