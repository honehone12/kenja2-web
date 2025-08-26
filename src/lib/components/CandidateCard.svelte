<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import AnimeCard from "$lib/components/AnimeCard.svelte";
    import CharacterCard from "$lib/components/CharacterCard.svelte";
    import type { Lang } from "$lib";

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
            name_english: doc.name_english,
            name_japanese: doc.name_japanese,
            name: doc.name,
            id: doc.id,
            img: doc.img,
            src: doc.src
        }}
    />
{:else if doc.item_type === ItemType.Character}
    <CharacterCard
        {lang}
        doc={{
            parent: doc.parent,
            name_japanese: doc.name_japanese,
            name: doc.name,
            id: doc.id,
            img: doc.img,
            src: doc.src
        }}
    />
{/if}
