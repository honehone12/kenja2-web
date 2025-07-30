<script lang="ts">
    import {page} from '$app/state';
    import ErrorMsg from "$lib/components/ErrorMsg.svelte";
    import LoadingMsg from "$lib/components/LoadingMsg.svelte";
    import type { SearchResult } from "$lib/documents/anime-search/documents";
    import CandidateCard from "$lib/components/CandidateCard.svelte";
    import DocumentModal from "$lib/components/DocumentModal.svelte";
    import { DOCUMENT_MODAL_ID, getModal } from "$lib";

    interface Props {
        buffer: Promise<SearchResult>;
        isVector: boolean;
    }

    let selectedId: string | null = $state(null);
    let selectedUrl: string | null = $state(null);
    let selectedItemType: string | null = $state(null);
    let {buffer, isVector}: Props = $props();

    function openModal(
        id: string, 
        url: string, 
        itemType: string
    ) {
        selectedId = id;
        selectedUrl = url;
        selectedItemType = itemType;
        getModal(DOCUMENT_MODAL_ID)?.showModal();
    }

    function closeModal() {
        selectedId = null;
        selectedUrl = null;
        selectedItemType = null;
        getModal(DOCUMENT_MODAL_ID)?.close();
    }

    function itemType() {
        const iType = page.url.searchParams.get('item-type'); 
        return iType ? iType : 'anime and character';
    }

    function vectorType() {
        const vType = page.url.searchParams.get('vector'); 
        return vType ? vType : 'vector';
    }
</script>


<div class="hero min-h-screen w-full">
    {#await buffer}
        <div class="hero-content">
            <LoadingMsg/>
        </div>
    {:then {documents}}
        {#if documents}
            <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
                <div class="card border border-neutral-500 text-center w-full p-5 my-5">
                    {#if isVector}
                        <h1 class="text-lg">Similar {itemType()} with "{documents.at(0)?.name ?? ' '}" ({vectorType()})</h1>
                    {:else}
                        <h1 class="text-lg">Search result of {itemType()} with "{page.url.searchParams.get('keyword') ?? ''}"</h1>
                    {/if}
                </div>
                {#each documents as doc}
                    <CandidateCard      
                        {doc}
                        onclickItem={openModal}
                    />
                {/each}
            </div>
            <DocumentModal
                id={selectedId}
                url={selectedUrl} 
                itemType={selectedItemType}
                onclickClose={closeModal}
            />
        {:else}
            <h2 class="hero-content text-xl">No results</h2>
        {/if}
    {:catch}
        <div class="hero-content">
            <ErrorMsg/>
        </div>
    {/await}    
</div>
