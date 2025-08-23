<script lang="ts">
    import { Lang } from "$lib";
    import { ItemType, Rating } from "$lib/documents/anime-search/queries";
    import {textSearchUrl, vectorSearchUrl} from "$lib/client/search";

    interface Doc {
        rating: Rating;
        name_english: string | undefined;
        name_japanese: string | undefined;
        name: string;
        id: string;
        img: string;
        src: string;
    }

    interface Props {
        lineColor: string;
        badgeColor: string;
        useBlur: boolean;
        lang: Lang;
        doc: Doc;
    }

    let {
        lineColor,
        badgeColor,
        useBlur,
        lang,
        doc
    }: Props = $props();
</script>

<div class="card w-80 outline {lineColor}">
    <div class="card-body">
        <div class="badge badge-outline {badgeColor} mb-5">
            <p>Anime アニメ</p>
        </div>
        {#if doc.name_english}
            <h3>{doc.name_english}</h3>
        {/if}
        {#if lang === Lang.Jp && doc.name_japanese}
            <a href="{textSearchUrl(doc.name_japanese, doc.rating)}">
                <h2 class="card-title link link-primary text-xl">{doc.name_japanese}</h2>
            </a>
            <h2 class="text-xl mb-5">{doc.name}</h2>
        {:else}
            {#if doc.name_japanese}    
                <h2 class="text-xl">{doc.name_japanese}</h2>
            {/if}
            <a href="{textSearchUrl(doc.name, doc.rating)}">
                <h2 class="card-title link link-primary text-xl mb-5">{doc.name}</h2>
            </a>
        {/if}
        <div class="text-center">
            <a 
                href="{vectorSearchUrl(doc.id, ItemType.Anime, doc.rating)}" 
                class="tooltip" 
                data-tip="Search Similar Images"
            >
                <img 
                    src="{doc.img}" 
                    alt="an anime image of {doc.name}"
                    class="card-action max-w-60 {useBlur ? 'blur-xl' : ''}"
                    loading="lazy"
                >
            </a>
            <a href="{doc.src}">
                <p class="link link-primary">source</p>
            </a>
        </div>
    </div>
</div>
