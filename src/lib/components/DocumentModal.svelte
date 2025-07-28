<script lang="ts">
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
    <div class="modal-box flex flex-col place-items-center outline outline-cyan-500">
        <form method="dialog">
            <button 
                class="btn btn-sm btn-info btn-outline btn-circle absolute right-2 top-2"
                onclick={onclickClose}
            >X</button>
        </form>
        {#if url}
            <div class="text-center my-8">
                <h2 class="text-xl mb-5">
                    For more infomations
                </h2>
                <a href="{url}" target="_blank">
                    <p class="text-xl link link-primary">Open MyAnimeList page</p>
                </a>
            </div>
        {:else}
            <div class="text-center my-8">
                <h2 class="text-xl">No infomations</h2>
            </div>
        {/if}
    </div>
</dialog>
