<script lang="ts">
    'use strict';
    
    import type { Candidate } from "$lib/documents/documents";

    interface Props {
        candidate: Candidate;
    }

    let {candidate}: Props = $props();
</script>

<div class="card card-xl min-w-full max-w-200 bg-base-200 card-border">
    <div class="card-body">
        {#if candidate.parent}
            <div class="badge badge-outline badge-info">
                <p>Character キャラクター</p>
            </div>    
            <h3 class="text-base">
                {candidate.parent.name} / {candidate.parent.name_japanese ?? ''}
            </h3>
        {:else}
            <div class="badge badge-outline badge-info">
                <p>Anime アニメ</p>
            </div>
        {/if}
        {#if candidate.name_english}
            <h2 class="text-lg">{candidate.name}</h2>
        {/if}
        {#if candidate.name_english}
            <h2 class="text-lg">{candidate.name_english}</h2>
        {/if}
        <a href="/item/{candidate.id}">
            <h1 class="card-title link link-hover">
                {candidate.name}
            </h1>
        </a>
    </div>
</div>
