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

    function isAnime(itemType: ItemType) {
        return itemType === ItemType.Anime || itemType === ItemType.AnimeImgOnly;
    }

    function isCharacter(itemType: ItemType) {
        return itemType === ItemType.Character || itemType === ItemType.CharacterImgOnly;
    }

    function hasTextVec(itemType: ItemType) {
        return itemType === ItemType.Anime || itemType === ItemType.Character;
    }
</script>

<div class="card w-80 outline {lineColor(doc.rating)}">
    <div class="card-body">
        {#if isAnime(doc.item_type)}  
            <div class="badge badge-outline {badgeColor(doc.rating)} mb-5">
                <p>Anime アニメ</p>
            </div>      
        {:else if isCharacter(doc.item_type)}
            <div class="badge badge-dash {badgeColor(doc.rating)} mb-5">
                <p>Character キャラクター</p>
            </div>
            {#if doc.parent}
                <a href="{doc.rating === Rating.X ? '/kenja' : ''}/textsearch/buffer?keyword={doc.parent.name}&item-type=">
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
        <a href="{doc.rating === Rating.X ? '/kenja' : ''}/textsearch/buffer?keyword={doc.name}&item-type=">
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
            <h2 class="text-xl my-5">Find similar items</h2>
            {#if hasTextVec(doc.item_type)}
                <a href="{doc.rating === Rating.X ? '/kenja' : ''}/vectorsearch/buffer/{doc.id}?item-type={isCharacter(doc.item_type) ? 'character' : 'anime'}&vector=text">
                    <button 
                        class="btn btn-lg {btnColor(doc.rating)} w-30 mr-5 tooltip" 
                        data-tip="Search Similar Summary Texts"
                    >Text</button>
                </a>
            {/if}
            <a href="{doc.rating === Rating.X ? '/kenja' : ''}/vectorsearch/buffer/{doc.id}?item-type={isCharacter(doc.item_type) ? 'character' : 'anime'}&vector=image">
                <button 
                    class="btn btn-lg {btnColor(doc.rating)} w-30 tooltip"
                    data-tip="Search Similar Images"
                >Image</button>
            </a>
        </div>
    </div>
</div>
