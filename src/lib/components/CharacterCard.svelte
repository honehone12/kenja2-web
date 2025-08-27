<script lang="ts">
    import { Lang } from "$lib";
    import type { Parent } from "$lib/documents/anime-search/documents";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import ParentLabel from "$lib/components/ParentLabel.svelte";
    import DocNameLabel from "$lib/components/DocNameLabel.svelte";

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
        <div class="mb-5">
            <ItemTypeBadge itemType={ItemType.Character}/>
        </div>
        <ParentLabel {lang} parent={doc.parent}/>    
        <DocNameLabel 
            {lang} 
            name={doc.name} 
            name_japanese={doc.name_japanese}
        />
        <div class="text-center">
            {#if doc.img}
                <a 
                    href="/vectorsearch/buffer/{doc.id}?item-type=character" 
                    class="tooltip" 
                    data-tip="Search Similar Images"
                >
                    <img 
                        src="/{doc.img}" 
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
