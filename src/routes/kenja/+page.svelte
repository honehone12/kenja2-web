<script lang="ts">
    import { 
        openAgeModal, 
        openDocumentModal, 
        closeDocumentModal 
    } from "$lib/client/modal";
    import AgeModal from "$lib/components/AgeModal.svelte";
    import DocumentModal from "$lib/components/DocumentModal.svelte";
    import TopDocuments from "$lib/components/TopDocuments.svelte";
    import type { FlatDocument } from "$lib/documents/anime-search/documents.js";
    import { onMount } from "svelte";

    let {data} = $props();

    onMount(() => {
        if (data.needAgeVerification) {
            openAgeModal();
        }
    });

    const __MAL_TOP: FlatDocument[] = [
        
    ];

    let selectedUrl: string | null = $state(null);

    function openModal(url: string) {
        selectedUrl = url;
        openDocumentModal();
    }

    function closeModal() {
        selectedUrl = null;
        closeDocumentModal();
    }

    function prepareMalTop() {
        if (data.needAgeVerification) {
            for (const doc of __MAL_TOP) {
                doc.img = "/kenja2_logo.png";
            }
        }
        return __MAL_TOP;
    }
</script>

<svelte:head>
	<title>Anime Kenja - Kenja Mode</title>
	<meta
		name="description"
		content="Anime Kenja is a anime and character search engine, featuring full text keyword search and similarity vector search."
	/>
</svelte:head>

<AgeModal ref="/kenja"/>
<div class="py-20">
    <TopDocuments
        name="My Anine List Top Animes"
        list={prepareMalTop()}
        onclickItem={openModal}
    />
</div>
<DocumentModal
    url={selectedUrl}
    onclickClose={closeModal}
/>
