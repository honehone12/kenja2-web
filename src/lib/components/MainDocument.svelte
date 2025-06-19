<script lang="ts">
    'use strict';
    
    import type { SingleDocument } from "$lib/documents/documents";
    import DocumentInfo from "$lib/components/DocumentInfo.svelte";
    import VectorSearchForm from "$lib/components/VectorSearchForm.svelte";

    interface Props {
        document: SingleDocument;
    }

    let {document}: Props = $props();
</script>

<div class="flex flex-col">
    <div class="flex flex-wrap">
        <DocumentInfo
            name={document.name}
            name_japanese={document.name_japanese}
            name_english={document.name_english}
            aliases={document.aliases}
            parent={document.parent}
        />
    </div>
    <div class="mt-10 ml-10">
        <div class="badge badge-accent mb-5">
            More infomation
        </div>
        <a href="{document.url}">
            <h1 class="text-2xl link link-primary">Check this item at MyAnimeList</h1>
        </a>
    </div>
    <div class="mt-10 ml-10">
        <VectorSearchForm />
    </div>
</div>
