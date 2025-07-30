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

    let selectedUrl: string | null = $state(null);
    let {buffer, isVector}: Props = $props();

    function openModal(url: string) {
        selectedUrl = url;
        getModal(DOCUMENT_MODAL_ID)?.showModal();
    }

    function closeModal() {
        selectedUrl = null;
        getModal(DOCUMENT_MODAL_ID)?.close();
    }

    function itemType() {
        const iType = page.url.searchParams.get('item-type');
        // don't show unexpected values;
        switch (iType) {
        case '':
            return 'anime and character'; 
        case 'anime':
        case 'character':
            return iType;
        default:
            return '';
        }
    }

    function vectorType() {
        const vField = page.url.searchParams.get('vector');
        // don't show unexpected values; 
        switch (vField) {
            case 'image':
            case 'text':
                return vField;
            default:
                return '';
        }
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
                url={selectedUrl} 
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
