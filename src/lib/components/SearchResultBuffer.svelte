<script lang="ts">
    import {page} from '$app/state';
    import ErrorMsg from "$lib/components/ErrorMsg.svelte";
    import LoadingMsg from "$lib/components/LoadingMsg.svelte";
    import type { SearchResult, FlatDocument } from "$lib/documents/anime-search/documents";
    import CandidateCard from "$lib/components/CandidateCard.svelte";
    import DocumentModal from "$lib/components/DocumentModal.svelte";
    import {openDocumentModal, closeDocumentModal, openAgeModal} from "$lib/client/modal";
    import AgeModal from '$lib/components/AgeModal.svelte';
    import { onMount } from 'svelte';

    interface Props {
        buffer: Promise<SearchResult>;
        needAgeVerification: boolean;
        isVector: boolean;
    }

    let {buffer, needAgeVerification, isVector}: Props = $props();
    let selectedUrl: string | null = $state(null);

    onMount(() => {
        if (needAgeVerification) {
            openAgeModal();
        }
    });

    function openModal(url: string) {
        selectedUrl = url;
        openDocumentModal();
    }

    function closeModal() {
        selectedUrl = null;
        closeDocumentModal();
    }

    function vectorSource(documents: FlatDocument[]) {
        return documents.at(0)?.name ?? ' ';
    }
    
    function searchKeywords() {
        // if this is shown, kws are wihin limit and there are matched results.
        let kw = page.url.searchParams.get('keyword') ?? '';
        return kw.replace(/<.*?>/g, '');
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

<AgeModal ref={page.url.pathname + page.url.search}/>
<div class="mt-20 text-center">
    <h1 class="text-3xl text-info">Search Results</h1>
</div>    
{#await buffer}
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
                        <h2 class="text-lg">Similar {itemType()} with "{vectorSource(documents)}" ({vectorType()})</h2>
                    {:else}
                        <h2 class="text-lg">Search result of {itemType()} with "{searchKeywords()}"</h2>
                    {/if}
                </div>
            </div>
            <div class="hero w-full">
                <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
                    {#each documents as doc}
                        <CandidateCard      
                            {doc}
                            useBlur={needAgeVerification}
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
<div class="mb-20 text-center">
    <h2 class="text-lg">Tip💡</h2>
    {#if isVector}
        <p>
            Search results will vary depending on whether the vector source is an image or text.
        </p>
    {:else}
        <p>
            Search results will vary depending on whether fuzzy search is ON or not.
        </p>
    {/if}
</div>
