<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import AnimeCard from "$lib/components/AnimeCard.svelte";
    import CharacterCard from "$lib/components/CharacterCard.svelte";
    import type { Lang } from "$lib";
    import YVideoCard from "$lib/components/YVideoCard.svelte";

    interface Props {
        lang: Lang
        doc: FlatDocument;
        myList: string[];
        onStar: (id: string, star: boolean) => Promise<void>;
    }

    let {
        lang, 
        doc, 
        myList, 
        onStar
    }: Props = $props();
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
        star={myList.includes(doc.id)}
        onStar={(star) => onStar(doc.id, star)}
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
        star={myList.includes(doc.id)}
        onStar={(star) => onStar(doc.id, star)}
    />
{:else if doc.item_type === ItemType.YVideo}
    <YVideoCard
        {lang}
        name={doc.parent?.name}
        nameJapanese={doc.parent?.name_japanese}
        unique={doc.unique}
        star={myList.includes(doc.id)}
        onStar={(star) => onStar(doc.id, star)}
    />
{/if}
