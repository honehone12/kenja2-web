<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import AnimeCard from "$lib/components/AnimeCard.svelte";
    import CharacterCard from "$lib/components/CharacterCard.svelte";
    import type { Lang } from "$lib";
    import YVideoCard from "$lib/components/YVideoCard.svelte";

    interface Props {
        doc: FlatDocument;
        lang: Lang
    }

    let {doc, lang}: Props = $props();
</script>

{#if doc.item_type === ItemType.Anime}
    <AnimeCard
        {lang}
        doc={{
            id: doc.id,
            name: doc.name,
            nameEnglish: doc.name_english,
            nameJapanese: doc.name_japanese,
            img: doc.img,
            src: doc.src
        }}
    />
{:else if doc.item_type === ItemType.Character}
    <CharacterCard
        {lang}
        doc={{
            id: doc.id,
            parent: doc.parent,
            name: doc.name,
            nameJapanese: doc.name_japanese,
            img: doc.img,
            src: doc.src
        }}
    />
{:else if doc.item_type === ItemType.YVideo}
    <YVideoCard
        {lang}
        name={doc.parent?.name}
        nameJapanese={doc.parent?.name_japanese}
        unique={doc.unique}
    />
{/if}
