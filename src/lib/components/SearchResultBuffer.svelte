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
        needAgeVerification: boolean;
        isVector: boolean;
    }

    let {buffer, needAgeVerification, isVector}: Props = $props();
    let selectedUrl: string | null = $state(null);

    async function searchResult() {
        const result = await buffer;
        if (needAgeVerification && result.documents) {
            for (const doc of result.documents) {
                doc.img = '/kenja2_logo.png';
            }
        }
        return result;
    }

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
            return 'animes and characters'; 
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

{#await searchResult()}
    <div class="hero min-h-screen w-full">
        <div class="hero-content">
            <LoadingMsg/>
        </div>
    </div>
{:then {documents}}
    {#if documents}
        <div class="py-20">
            <div class="hero w-full">
                <div class="hero-content card border border-neutral-500 text-center min-w-80 p-5 mx-10 mb-10">
                    {#if isVector}
                        <h1 class="text-lg">Similar {itemType()} with "{documents.at(0)?.name ?? ' '}" ({vectorType()})</h1>
                    {:else}
                        <h1 class="text-lg">Search result of {itemType()} with "{page.url.searchParams.get('keyword') ?? ''}"</h1>
                    {/if}
                </div>
            </div>
            <div class="hero w-full">
                <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
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
            </div>
        </div>
    {:else}
        <div class="hero min-h-screen w-full">
            <h2 class="hero-content text-xl">No results</h2>
        </div>
    {/if}
{:catch}
    <div class="hero min-h-screen w-full">
        <div class="hero-content">
            <ErrorMsg/>
        </div>
    </div>
{/await}    
