<script lang="ts">
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import AnimeCard from "$lib/components/AnimeCard.svelte";
    import CharacterCard from "$lib/components/CharacterCard.svelte";
    import type { Lang } from "$lib";
    import YVideoCard from "$lib/components/YVideoCard.svelte";
    import type { OnUnstar } from "$lib/client/callback";

    interface Props {
        lang: Lang;
        doc: FlatDocument;
        onUnstar?: OnUnstar;
    }

    let { lang, doc, onUnstar }: Props = $props();
</script>

{#if doc.item_type === ItemType.Anime}
    <AnimeCard {lang} {doc} {onUnstar} />
{:else if doc.item_type === ItemType.Character}
    <CharacterCard {lang} {doc} {onUnstar} />
{:else if doc.item_type === ItemType.YVideo}
    <YVideoCard {lang} {doc} {onUnstar} />
{/if}
