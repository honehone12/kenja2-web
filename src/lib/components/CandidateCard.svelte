<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents";
    import { ItemType, Rating } from "$lib/documents/anime-search/queries";
    import AnimeCard from "$lib/components/AnimeCard.svelte";
    import CharacterCard from "$lib/components/CharacterCard.svelte";
    import type { Lang } from "$lib";

    interface Props {
        doc: FlatDocument;
        useBlur: boolean;
        lang: Lang
    }

    let {doc, useBlur, lang}: Props = $props();

    function lineColor(rating: Rating) {
        return rating === Rating.X ? 'outline-fuchsia-500' : 'outline-cyan-500';
    }

    function badgeColor(rating: Rating) {
        return rating === Rating.X ? 'badge-secondary' : 'badge-accent';
    }
</script>

{#if doc.item_type === ItemType.Anime}
    <AnimeCard
        lineColor={lineColor(doc.rating)}
        badgeColor={badgeColor(doc.rating)}
        {useBlur}
        {lang}
        doc={{
            rating: doc.rating,
            name_english: doc.name_english,
            name_japanese: doc.name_japanese,
            name: doc.name,
            id: doc.id,
            img: doc.img,
            src: doc.url
        }}
    />
{:else if doc.item_type === ItemType.Character}
    <CharacterCard
        lineColor={lineColor(doc.rating)}
        badgeColor={badgeColor(doc.rating)}
        {useBlur}
        {lang}
        doc={{
            rating: doc.rating,
            parent: doc.parent,
            name_english: doc.name_english,
            name_japanese: doc.name_japanese,
            name: doc.name,
            id: doc.id,
            img: doc.img,
            src: doc.url
        }}
    />
{/if}
