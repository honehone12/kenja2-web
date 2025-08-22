<script lang="ts">
    import { Lang } from "$lib";
    import { Rating } from "$lib/documents/anime-search/queries";
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
        btnColor: string;
        useBlur: boolean;
        lang: Lang;
        doc: Doc;
    }

    let {
        lineColor,
        badgeColor,
        btnColor,
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
            <figure>
                <img 
                    src="{doc.img}" 
                    alt="an anime image of {doc.name}"
                    class="max-w-60 {useBlur ? 'blur-xl' : ''}"
                    loading="lazy"
                >
            </figure>
            <a href="{doc.src}">
                <p class="link link-primary mt-2">source</p>
            </a>
            <a href="{vectorSearchUrl(doc.id, doc.rating)}">
                <button 
                    class="card-action btn btn-lg {btnColor} tooltip mt-8"
                    data-tip="Search Similar Images"
                >Find similar items</button>
            </a>
        </div>
    </div>
</div>
