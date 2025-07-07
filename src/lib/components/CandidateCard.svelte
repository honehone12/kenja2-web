<script lang="ts">
    'use strict';
    
    import type { Parent } from "$lib/documents/anime-search/documents";
    
    interface Props {
        parent: Parent | undefined;
        id: string;
        name: string;
        name_japanese: string | undefined;
    }

    let {
        parent,
        id,
        name,
        name_japanese
    }: Props = $props();
</script>

<div class="card w-90 bg-base-200">
    <div class="card-body">
        {#if parent}
            <div class="badge badge-dash badge-info mb-5">
                <p>Character キャラクター</p>
            </div>
            <a href="/document/{parent.id}">
                <h3 class="link link-primary">
                    {parent.name} / {parent.name_japanese ?? ''}
                </h3>    
            </a>
        {:else}
            <div class="badge badge-outline badge-info mb-5">
                <p>Anime アニメ</p>
            </div>
        {/if}
        {#if name_japanese}
            <h2 class="text-xl">{name_japanese}</h2>
        {/if}
        <a href="/document/{id}">
            <h1 class="card-title text-xl link link-accent">
                {name}
            </h1>
        </a>
    </div>
</div>
