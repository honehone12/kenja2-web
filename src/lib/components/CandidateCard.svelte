<script lang="ts">
    import type {Parent} from "$lib/documents/anime-search/documents";
    
    interface Candidate {
        id: string;
        url: string;
        parent: Parent | undefined;
        name: string;
        nameJapanese: string | undefined;
        nameEnglish: string | undefined;
    }

    interface Props {
        doc: Candidate;
        onclickItem: (
            id: string, 
            url: string, 
            itemType: string
        ) => void
    }

    let {doc, onclickItem}: Props = $props();
</script>

<div class="card w-90 outline outline-cyan-500">
    <div class="card-body">
        {#if doc.parent}
            <div class="badge badge-dash badge-info mb-5">
                <p>Character キャラクター</p>
            </div>
            <a href="/textsearch/buffer?keyword={doc.parent.name}&item-type=">
                <h3 class="link link-primary">
                    {doc.parent.name} / {doc.parent.name_japanese ?? ''}
                </h3>    
            </a>
        {:else}
            <div class="badge badge-outline badge-info mb-5">
                <p>Anime アニメ</p>
            </div>
        {/if}
        {#if doc.nameEnglish}
            <h3>{doc.nameEnglish}</h3>
        {/if}
        {#if doc.nameJapanese}    
            <h2 class="text-xl">{doc.nameJapanese}</h2>
        {/if}
        <a href="/textsearch/buffer?keyword={doc.name}&item-type=">
            <h2 class="card-title link link-primary text-xl mb-5">{doc.name}</h2>
        </a>
        <div class="card-action text-center">
            <h2 class="text-xl mb-5">Find similar items</h2>
            <a href="/vectorsearch/buffer/{doc.id}?item-type={doc.parent ? 'character' : 'anime'}&vector=text">
                <button class="btn btn-accent w-30 mr-2">Text</button>
            </a>
            <a href="/vectorsearch/buffer/{doc.id}?item-type={doc.parent ? 'character' : 'anime'}&vector=image">
                <button class="btn btn-accent w-30 ml-2">Vector</button>
            </a>
        </div>
        


        <button 
            class="card-action btn btn-sm btn-accent"
            onclick={() => onclickItem(
                doc.id,
                doc.url, 
                doc.parent ? 'character' : 'anime'
            )}
        >More infomations</button>
    </div>
</div>
