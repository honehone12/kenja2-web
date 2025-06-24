<script lang="ts">
    'use strict';
    
    import type { Candidate } from "$lib/documents/documents";

    interface Props {
        candidate: Candidate;
    }

    let {candidate}: Props = $props();
</script>

<div class="card w-90 bg-base-200">
    <div class="card-body">
        {#if candidate.parent}
            <div class="badge badge-dash badge-info mb-5">
                <p>Character キャラクター</p>
            </div>
            <a href="/document/{candidate.parent.id}">
                <h3 class="link link-primary">
                    {candidate.parent.name} / {candidate.parent.name_japanese ?? ''}
                </h3>    
            </a>
        {:else}
            <div class="badge badge-outline badge-info mb-5">
                <p>Anime アニメ</p>
            </div>
        {/if}
        {#if candidate.name_japanese}
            <h2 class="text-xl">{candidate.name_japanese}</h2>
        {/if}
        <a href="/document/{candidate.id}">
            <h1 class="card-title text-xl link link-accent">
                {candidate.name}
            </h1>
        </a>
    </div>
</div>
