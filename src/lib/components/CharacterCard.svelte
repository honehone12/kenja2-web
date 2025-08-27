<script lang="ts">
    import { Lang } from "$lib";
    import type { Parent } from "$lib/documents/anime-search/documents";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import ParentLabel from "$lib/components/ParentLabel.svelte";
    import DocNameLabel from "$lib/components/DocNameLabel.svelte";
    import ImageVectorSearchButton from "$lib/components/ImageVectorSearchButton.svelte";

    interface Doc {
        id: string;
        parent: Parent | undefined;
        name: string | undefined;
        nameJapanese: string | undefined;
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
        <ParentLabel {lang} docParent={doc.parent}/>
        <span class="mb-5">
            <DocNameLabel 
                {lang} 
                name={doc.name} 
                nameJapanese={doc.nameJapanese}
            />
        </span>    
        <ImageVectorSearchButton
            id={doc.id}
            itemType={ItemType.Character}
            name={doc.name}
            img={doc.img}
            src={doc.src}
        />
    </div>
</div>
