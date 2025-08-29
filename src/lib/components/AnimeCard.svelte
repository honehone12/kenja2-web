<script lang="ts">
    import { Lang } from "$lib";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import DocNameLabel from "$lib/components/DocNameLabel.svelte";
    import ImageVectorSearchButton from "$lib/components/ImageVectorSearchButton.svelte";
    
    interface Doc {
        id: string;
        name: string | undefined;
        nameEnglish: string | undefined;
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

<div class="card w-80 outline outline-secondary">
    <div class="card-body">
        <div class="mb-5">
            <ItemTypeBadge itemType={ItemType.Anime}/>
        </div>
        {#if doc.nameEnglish}
            <h3>{doc.nameEnglish}</h3>
        {/if}
        <span class="mb-5">
            <DocNameLabel
                {lang}
                useLink={true}
                name={doc.name}
                nameJapanese={doc.nameJapanese}
            />
        </span>
        <ImageVectorSearchButton
            id={doc.id}
            itemType={ItemType.Anime}
            name={doc.name}
            img={doc.img}
            src={doc.src}
        />
    </div>
</div>
