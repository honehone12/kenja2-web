<script lang="ts">
    'use strict';
    
    import type { Parent } from "$lib/documents/documents";

    interface Props {
        url: string;
        name: string;
        name_japanese: string | undefined;
        name_english: string | undefined;
        aliases: string[] | undefined;
        studios: string[] | undefined;
        parent: Parent | undefined;
    }

    let {
        url,
        name,
        name_japanese,
        name_english,
        aliases, 
        studios,
        parent
    }: Props = $props();
</script>

<div class="mx-10 mt-10">
    <div class="badge badge-info mb-5">
        {parent ? 'Character' : 'Anime'}
    </div>
    <h1 class="text-3xl mb-2">{name}</h1>
    {#if name_japanese}
        <h1 class="text-3xl">{name_japanese}</h1>
    {/if}
</div>
{#if name_english}
        <div class="mx-10 mt-10">
            <div class="badge badge-info mb-5">
                Name in English
            </div>
            <h2 class="text-2xl mb-3">{name_english}</h2>
        </div>
{/if}
{#if studios}
    <div class="mx-10 mt-10">
        <div class="badge badge-info mb-5">
            Studios
        </div>
        {#each studios as studio, i (i)}
            <h3 class="text-xl">{studio}</h3>
        {/each}
    </div>
{/if}
{#if aliases}
    <div class="mx-10 mt-10">
        <div class="badge badge-info mb-5">
            Also known as
        </div>
        {#each aliases as alias, i (i)}
            <h3 class="text-xl">{alias}</h3>
        {/each}
    </div>
{/if}
{#if parent}
    <div class="mx-10 mt-10">
        <a href="/document/{parent.id}">
            <div class="badge badge-info mb-5">
                Anime
            </div>
            <h1 class="text-xl link link-primary">
                {parent.name}
            </h1>
            {#if parent.name_japanese}
                <h1 class="text-xl link link-primary">
                    {parent.name_japanese}
                </h1>
            {/if}
        </a>
    </div>            
{/if}
<div class="mx-10 mt-10 ">
    <div class="badge badge-info mb-5">
        More infomation
    </div>
    <a href="{url}">
        <h1 class="text-xl link link-primary">Check this item at MyAnimeList</h1>
    </a>
</div>