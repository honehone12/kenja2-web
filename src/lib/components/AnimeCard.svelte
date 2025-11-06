<script lang="ts">
    import { Lang, extractTitle } from "$lib";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import TitleLabel from "$lib/components/TitleLabel.svelte";
    import ImageVectorSearch from "$lib/components/ImageVectorSearch.svelte";
    import Star from "$lib/components/Star.svelte";
    import ExternalAnime from "$lib/components/ExternalAnime.svelte";
    import DocumentCard from "$lib/component-layout/DocumentCard.svelte";
    import CardHead from "$lib/component-layout/CardHead.svelte";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";

    interface Props {
        lang: Lang;
        doc: FlatDocument;
        onUnstar?: (id: string) => void;
    }

    let { lang, doc, onUnstar }: Props = $props();
</script>

<DocumentCard>
    <CardHead>
        <ItemTypeBadge itemType={ItemType.Anime} />
        <Star {lang} {doc} {onUnstar} />
    </CardHead>
    {#if doc.name_english}
        <h3>{doc.name_english}</h3>
    {/if}
    <span class="mb-5">
        <TitleLabel
            {lang}
            useLink={true}
            name={doc.name}
            nameJapanese={doc.name_japanese}
        />
    </span>
    <ImageVectorSearch
        {lang}
        doc={{
            id: doc.id,
            itemType: ItemType.Anime,
            name: doc.name,
            nameJapanese: doc.name_japanese,
            img: doc.img,
            src: doc.src,
        }}
    />
    {#if doc.name_japanese}
        <div class="mt-5">
            <ExternalAnime
                {lang}
                nameJapanese={extractTitle(doc.name_japanese)}
            />
        </div>
    {/if}
</DocumentCard>
