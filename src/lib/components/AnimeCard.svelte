<script lang="ts">
    import { Lang } from "$lib";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import DocNameLabel from "$lib/components/DocNameLabel.svelte";
    import ImageVectorSearchButton from "$lib/components/ImageVectorSearchButton.svelte";
    import Star from "$lib/components/Star.svelte";

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
        star: boolean;
        onStar: (star: boolean) => Promise<void>;
    }

    let {lang, doc, star, onStar}: Props = $props();
</script>

<div class="card w-80 outline outline-secondary">
    <div class="card-body">
        <div class="mb-5">
            <ItemTypeBadge itemType={ItemType.Anime}/>
        </div>
        <div>
            <Star 
                {lang} 
                {star} 
                {onStar}
            />
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
            {lang}
            id={doc.id}
            itemType={ItemType.Anime}
            name={doc.name}
            img={doc.img}
            src={doc.src}
        />
    </div>
</div>
