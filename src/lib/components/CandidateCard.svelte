<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents";
    import { ItemType, Rating } from "$lib/documents/anime-search/queries";

    interface Props {
        doc: FlatDocument;
        useBlur: boolean;
        onclickItem: (url: string) => void
    }

    let {doc, useBlur, onclickItem}: Props = $props();

    function lineColor(rating: Rating) {
        return rating === Rating.X ? 'outline-fuchsia-500' : 'outline-cyan-500';
    }

    function btnColor(rating: Rating) {
        return rating === Rating.X ? 'btn-secondary' : 'btn-accent';
    }

    function badgeColor(rating: Rating) {
        return rating === Rating.X ? 'badge-secondary' : 'badge-accent';
    }
</script>

<div class="card w-80 outline {lineColor(doc.rating)}">
    <div class="card-body">
        {#if doc.item_type === ItemType.Anime}  
            <div class="badge badge-outline {badgeColor(doc.rating)} mb-5">
                <p>Anime アニメ</p>
            </div>      
        {:else if doc.item_type === ItemType.Character}
            <div class="badge badge-dash {badgeColor(doc.rating)} mb-5">
                <p>Character キャラクター</p>
            </div>
            {#if doc.parent}
                <a href="{doc.rating === Rating.X ? '/kenja' : ''}/textsearch/buffer?keyword={doc.parent.name}&item-type=all">
                    <h3 class="link link-primary">
                        {doc.parent.name} / {doc.parent.name_japanese ?? ''}
                    </h3>    
                </a>    
            {/if}
        {/if}
        {#if doc.name_english}
            <h3>{doc.name_english}</h3>
        {/if}
        {#if doc.name_japanese}    
            <h2 class="text-xl">{doc.name_japanese}</h2>
        {/if}
        <a href="{doc.rating === Rating.X ? '/kenja' : ''}/textsearch/buffer?keyword={doc.name}&item-type=all">
            <h2 class="card-title link link-primary text-xl mb-5">{doc.name}</h2>
        </a>
        <div class="card-action text-center">
            <button onclick={() => onclickItem(doc.url)}>
                <img 
                    src="{doc.img}" 
                    alt="an anime image of {doc.name}"
                    class="max-w-60 {useBlur ? 'blur-xl' : ''}"
                    loading="lazy"
                >
            </button>
            <a href="{doc.rating === Rating.X ? '/kenja' : ''}/vectorsearch/buffer/{doc.id}?item-type={doc.item_type === ItemType.Anime ? 'anime' : 'character'}">
                <button 
                    class="btn btn-lg {btnColor(doc.rating)} tooltip mt-8"
                    data-tip="Search Similar Images"
                >Find similar items</button>
            </a>
        </div>
    </div>
</div>
