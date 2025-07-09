<script lang="ts">
    'use strict';
    
    import type {Parent} from "$lib/documents/anime-search/documents";
    
    interface Candidate {
        parent: Parent | undefined;
        id: string;
        name: string;
        nameJapanese: string | undefined;
    }

    interface Props {
        doc: Candidate;
        onclickItem: (id: string, itemType: string) => void
    }

    let {doc, onclickItem}: Props = $props();
</script>

<div class="card w-90 bg-base-200">
    <div class="card-body">
        {#if doc.parent}
            <div class="badge badge-dash badge-info mb-5">
                <p>Character キャラクター</p>
            </div>
            <a href="/search/buffer/text?keyword={doc.parent.name}&item-type=all">
                <h3 class="link link-primary">
                    {doc.parent.name} / {doc.parent.name_japanese ?? ''}
                </h3>    
            </a>
        {:else}
            <div class="badge badge-outline badge-info mb-5">
                <p>Anime アニメ</p>
            </div>
        {/if}
        {#if doc.nameJapanese}
            <h2 class="text-xl">{doc.nameJapanese}</h2>
        {/if}
        <h1 class="card-title text-xl mb-5">
            {doc.name}
        </h1>
        <button 
            class="card-action btn btn-md btn-accent"
            onclick={() => onclickItem(
                doc.id, 
                doc.parent ? 'character' : 'anime'
            )}
        >Select this item</button>
    </div>
</div>
