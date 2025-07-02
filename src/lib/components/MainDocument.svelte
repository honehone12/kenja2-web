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
    <h1 class="text-3xl text-info mx-10 mt-15">Item infomation</h1>
    <div class="flex flex-wrap mx-5">
        <DocumentInfo
            url={document.url}
            name={document.name}
            name_japanese={document.name_japanese}
            name_english={document.name_english}
            aliases={document.aliases}
            studios={document.studios}
            parent={document.parent}
        />
    </div>
    <div class="mt-15 mb-20">
        <h1 class="text-3xl text-info mx-10 mb-10">Search similar items</h1>
        <div class="mx-15">
            <VectorSearchForm 
                id={document.id}
                item_type={document.parent ? "character" : "anime"}
            />
        </div>
    </div>
</div>
