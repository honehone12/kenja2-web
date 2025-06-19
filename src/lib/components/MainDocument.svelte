<script lang="ts">
    'use strict';
    
    import type { SingleDocument } from "$lib/documents/documents";
    import ParentDocument from "$lib/components/ParentDocument.svelte";
    import VectorSearchForm from "./VectorSearchForm.svelte";

    interface Props {
        document: SingleDocument
    }

    let {document}: Props = $props();
</script>

<div class="flex flex-col">
    <div class="flex flex-wrap">
        <div class="mt-10 ml-10">
            <div class="badge badge-accent mb-5">
                {document.parent ? 'Character' : 'Anime'}
            </div>
            {#if document.name_english}
                <h2 class="text-2xl mb-3">{document.name_english}</h2>
            {/if}
            <h1 class="text-3xl mb-2">{document.name}</h1>
            {#if document.name_japanese}
                <h1 class="text-3xl">{document.name_japanese}</h1>
            {/if}
        </div>
        {#if document.aliases}
            <div class="mt-10 ml-10">
                <div class="badge badge-accent mb-5">
                    Also known as...
                </div>
                {#each document.aliases as alias, i (i)}
                    <h3 class="text-xl">{alias}</h3>
                {/each}
            </div>
        {/if}
        {#if document.parent}
            <div class="mt-10 ml-10">
                <ParentDocument parent={document.parent}/>
            </div>
        {/if}
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
