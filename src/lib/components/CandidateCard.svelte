<script lang="ts">
    'use strict';
    
    import type { Parent } from "$lib/documents/anime-search/documents";
    
    interface Candidate {
        parent: Parent | undefined;
        id: string;
        name: string;
        name_japanese: string | undefined;
    }

    interface Props {
        doc: Candidate;
    }

    let {doc}: Props = $props();
</script>

<div class="card w-90 bg-base-200">
    <div class="card-body">
        {#if doc.parent}
            <div class="badge badge-dash badge-info mb-5">
                <p>Character キャラクター</p>
            </div>
            <a href="/document/{doc.parent.id}">
                <h3 class="link link-primary">
                    {doc.parent.name} / {doc.parent.name_japanese ?? ''}
                </h3>    
            </a>
        {:else}
            <div class="badge badge-outline badge-info mb-5">
                <p>Anime アニメ</p>
            </div>
        {/if}
        {#if doc.name_japanese}
            <h2 class="text-xl">{doc.name_japanese}</h2>
        {/if}
        <a href="/document/{doc.id}">
            <h1 class="card-title text-xl link link-accent">
                {doc.name}
            </h1>
        </a>
    </div>
</div>
