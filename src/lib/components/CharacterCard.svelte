<script lang="ts">
    import { Lang } from "$lib";
    import type { Parent } from "$lib/documents/anime-search/documents";

    interface Doc {
        parent: Parent | undefined;
        name_japanese: string | undefined;
        name: string | undefined;
        id: string | undefined;
        img: string | undefined;
        src: string | undefined;
    }

    interface Props {
        lang: Lang;
        doc: Doc;
    }

    let {lang, doc}: Props = $props();
</script>

<div class="card w-80 outline outline-cyan-500">
    <div class="card-body">
        <div class="badge badge-dash badge-accent mb-5">
            <p>Character キャラクター</p>
        </div>
        {#if doc.parent}
            <a href="/textsearch/buffer?keyword={lang === Lang.Jp ? doc.parent.name_japanese : doc.parent.name}&item-type=all">
                <h3 class="link link-primary">
                    {doc.parent.name}{doc.parent.name_japanese ? `/ ${doc.parent.name_japanese}`: ''}
                </h3>    
            </a>    
        {/if}
        {#if lang === Lang.Jp}
            {#if doc.name_japanese}
                <a href="/textsearch/buffer?keyword={doc.name_japanese}&item-type=all">
                    <h2 class="card-title link link-primary text-xl">{doc.name_japanese}</h2>
                </a>
            {/if}
            {#if doc.name}
                <h2 class="text-xl mb-5">{doc.name}</h2>
            {/if}
        {:else}
            {#if doc.name_japanese}    
                <h2 class="text-xl">{doc.name_japanese}</h2>
            {/if}
            {#if doc.name}
                <a href="/textsearch/buffer?keyword={doc.name}&item-type=all">
                    <h2 class="card-title link link-primary text-xl mb-5">{doc.name}</h2>
                </a>
            {/if}
        {/if}
        <div class="text-center">
            {#if doc.img}
                <a 
                    href="/vectorsearch/buffer/{doc.id}?item-type=character" 
                    class="tooltip" 
                    data-tip="Search Similar Images"
                >
                    <img 
                        src="{doc.img}" 
                        alt="an anime image of {doc.name}"
                        class="card-action max-w-60"
                        loading="lazy"        
                    >
                </a>
            {/if}
            {#if doc.src}
                <a href="{doc.src}">
                    <p class="link link-primary">source</p>
                </a>
            {/if}
        </div>
    </div>
</div>
