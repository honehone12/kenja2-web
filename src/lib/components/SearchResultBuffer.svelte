<script lang="ts">
    'use strict';
    
    import ErrorMsg from "$lib/components/ErrorMsg.svelte";
    import LoadingMsg from "$lib/components/LoadingMsg.svelte";
    import type { SearchResult } from "$lib/documents/anime-search/documents";
    import CandidateCard from "$lib/components/CandidateCard.svelte";
    import DocumentModal from "$lib/components/DocumentModal.svelte";
    import { DOCUMENT_MODAL_ID, getModal } from "$lib";

    interface Props {
        buffer: Promise<SearchResult>;
    }

    let selectedId: string | null = $state(null);
    let selectedUrl: string | null = $state(null);
    let selectedItemType: string | null = $state(null);
    let {buffer}: Props = $props();

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
</script>

<div class="hero min-h-screen w-full">
    {#await buffer}
        <div class="hero-content">
            <LoadingMsg/>
        </div>
    {:then {documents}}
        {#if documents}
            <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
                {#each documents as doc}
                    <CandidateCard      
                        doc={{
                            url: doc.url,
                            id: doc.id,
                            parent: doc.parent,
                            name: doc.name,
                            nameJapanese: doc.name_japanese,
                            nameEnglish: doc.name_english
                        }}
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
