<script lang="ts">
    'use strict';
    
    import type { Candidate } from "$lib/documents/documents";

    interface Props {
        candidate: Candidate;
    }

    let {candidate}: Props = $props();
</script>

<div class="card w-90 md:w-180 lg:w-250 bg-base-200">
    <div class="card-body">
        {#if candidate.parent}
            <div class="badge badge-outline badge-accent">
                <p>Character キャラクター</p>
            </div>
            <a href="/document/{candidate.parent.id}">
                <h3 class="link">
                    {candidate.parent.name} / {candidate.parent.name_japanese ?? ''}
                </h3>    
            </a>
            
            
        {:else}
            <div class="badge badge-outline badge-accent">
                <p>Anime アニメ</p>
            </div>
        {/if}
        {#if candidate.name_english}
            <h2 class="text-lg">{candidate.name_english}</h2>
        {/if}
        {#if candidate.name_japanese}
            <h2 class="text-lg">{candidate.name_japanese}</h2>
        {/if}
        <a href="/document/{candidate.id}">
            <h1 class="card-title text-xl link link-primary">
                {candidate.name}
            </h1>
        </a>
    </div>
</div>
