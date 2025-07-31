<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents";

    interface Props {
        doc: FlatDocument;
        onclickItem: (url: string) => void
    }

    let {doc, onclickItem}: Props = $props();
</script>

<div class="card w-80 outline outline-cyan-500">
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
        {#if doc.name_english}
            <h3>{doc.name_english}</h3>
        {/if}
        {#if doc.name_japanese}    
            <h2 class="text-xl">{doc.name_japanese}</h2>
        {/if}
        <a href="/textsearch/buffer?keyword={doc.name}&item-type=">
            <h2 class="card-title link link-primary text-xl mb-5">{doc.name}</h2>
        </a>
        <div class="card-action text-center">
            <button onclick={() => onclickItem(doc.url)}>
                <img 
                    src="{doc.img}" 
                    alt="an anime image of {doc.name}"
                    class="max-w-60"
                    loading="lazy"
                >
            </button>
            <h2 class="text-xl my-5">Find similar items</h2>
            <a href="/vectorsearch/buffer/{doc.id}?item-type={doc.parent ? 'character' : 'anime'}&vector=text">
                <button class="btn btn-lg btn-accent w-30 mr-2">Text</button>
            </a>
            <a href="/vectorsearch/buffer/{doc.id}?item-type={doc.parent ? 'character' : 'anime'}&vector=image">
                <button class="btn btn-lg btn-accent w-30 ml-2">Image</button>
            </a>
        </div>
    </div>
</div>
