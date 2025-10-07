<script lang="ts">
    import { Lang } from "$lib";
    import type { Parent } from "$lib/documents/anime-search/documents";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import ParentLabel from "$lib/components/ParentLabel.svelte";
    import TitleLabel from "$lib/components/TitleLabel.svelte";
    import ImageVectorSearch from "$lib/components/ImageVectorSearch.svelte";
    import Star from "$lib/components/Star.svelte";
    import ExternalCharacter from "$lib/components/ExternalCharacter.svelte";
    import DocumentCard from "$lib/component-layout/DocumentCard.svelte";
    import CardHead from "$lib/component-layout/CardHead.svelte";

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
        star: boolean;
        onStar: (star: boolean) => Promise<void>;
    }

    let { lang, doc, star, onStar }: Props = $props();
</script>

<DocumentCard>
    <CardHead>
        <ItemTypeBadge itemType={ItemType.Character} />
        <Star {lang} {star} {onStar} />
    </CardHead>
    <ParentLabel
        {lang}
        name={doc.parent?.name}
        nameJapanese={doc.parent?.name_japanese}
    />
    <span class="mb-5">
        <TitleLabel
            {lang}
            useLink={false}
            name={doc.name}
            nameJapanese={doc.nameJapanese}
        />
    </span>
    <ImageVectorSearch
        {lang}
        doc={{
            id: doc.id,
            itemType: ItemType.Character,
            name: doc.name,
            nameJapanese: doc.nameJapanese,
            img: doc.img,
            src: doc.src,
        }}
    />
    {#if doc.nameJapanese}
        <div class="mt-5">
            <ExternalCharacter
                {lang}
                nameJapanese={encodeURIComponent(doc.nameJapanese)}
            />
        </div>
    {/if}
</DocumentCard>
