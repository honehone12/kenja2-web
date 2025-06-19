<script lang="ts">
    'use strict';
    
    import type { SingleDocument } from "$lib/documents/documents";
    import ParentDocument from "$lib/components/ParentDocument.svelte";

    interface Props {
        document: SingleDocument
    }

    let {document}: Props = $props();
</script>

{#if document.parent}
    <ParentDocument parent={document.parent}/>
{/if} 
<div class="mt-10 ml-10">
    <div class="badge badge-accent mb-5">
        {document.parent ? 'Character' : 'Anime'}
    </div>
    <h1 class="text-3xl">{document.name}</h1>
    {#if document.name_japanese}
        <h1 class="text-3xl">{document.name_japanese}</h1>
    {/if}
    {#if document.name_english}
        <h2 class="text-2xl">{document.name_english}</h2>
    {/if}
</div>
{#if document.aliases}
    <div class="mt-10 ml-10">
        <div class="badge badge-accent mb-5">
            Also known as...
        </div>
        {#each document.aliases as alias, i (i)}
            <h3 class="text-lg">{alias}</h3>
        {/each}
    </div>
{/if}
