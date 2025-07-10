<script lang="ts">
    'use strict';
    
    import {fade} from "svelte/transition";
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

<dialog id="{DOCUMENT_MODAL_ID}" class="modal" transition:fade>
    <div class="modal-box flex flex-col place-items-center">
        <form method="dialog">
            <button 
                class="btn btn-info btn-outline btn-circle absolute right-2 top-2"
                onclick={onclickClose}
            >x</button>
        </form>
        <h1 class="text-3xl mt-5">Find similar items</h1>
        <div class="modal-action">    
            <VectorSearchForm
                {id}
                {itemType}
            />
        </div>
        {#if url}
            <div class="mt-8 mb-5">
                <a href="{url}">
                    <h2 class="text-xl link link-primary">More infomations at MyAnimeList</h2>
                </a>
            </div>    
        {/if}
    </div>
</dialog>
