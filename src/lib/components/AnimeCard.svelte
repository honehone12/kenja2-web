<script lang="ts">
    import { Lang } from "$lib";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import DocNameLabel from "$lib/components/DocNameLabel.svelte";

    interface Doc {
        name_english: string | undefined;
        name_japanese: string | undefined;
        name: string | undefined;
        id: string;
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
            <ItemTypeBadge itemType={ItemType.Anime}/>
        </div>
        {#if doc.name_english}
            <h3>{doc.name_english}</h3>
        {/if}
        <DocNameLabel
            {lang}
            name={doc.name}
            name_japanese={doc.name_japanese}
        />
        <div class="text-center">
            {#if doc.img}
                <a 
                    href="/vectorsearch/buffer/{doc.id}?item-type=anime" 
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
