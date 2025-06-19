<script lang="ts">
    'use strict';
    
    import type { Parent } from "$lib/documents/documents";

    interface Props {
        name: string;
        name_japanese: string | undefined;
        name_english: string | undefined;
        aliases: string[] | undefined;
        parent: Parent | undefined;
    }

    let {
        name,
        name_japanese,
        name_english,
        aliases, 
        parent
    }: Props = $props();
</script>

<div class="mt-10 ml-10">
    <div class="badge badge-accent mb-5">
        {parent ? 'Character' : 'Anime'}
    </div>
    {#if name_english}
        <h2 class="text-2xl mb-3">{name_english}</h2>
    {/if}
    <h1 class="text-3xl mb-2">{name}</h1>
    {#if name_japanese}
        <h1 class="text-3xl">{name_japanese}</h1>
    {/if}
</div>
{#if aliases}
    <div class="mt-10 ml-10">
        <div class="badge badge-accent mb-5">
            Also known as...
        </div>
        {#each aliases as alias, i (i)}
            <h3 class="text-xl">{alias}</h3>
        {/each}
    </div>
{/if}
{#if parent}
    <div class="mt-10 ml-10">
        <a href="/document/{parent.id}">
            <div class="badge badge-accent mb-5">
                Anime
            </div>
            <h1 class="text-xl link link-primary">
                {parent.name} / {#if parent.name_japanese}{parent.name_japanese}{/if}
            </h1>
        </a>
    </div>            
{/if}
