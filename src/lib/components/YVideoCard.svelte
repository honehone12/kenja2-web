<script lang="ts">
    import { Lang } from "$lib";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import TitleLabel from "$lib/components/TitleLabel.svelte";
    import Star from "$lib/components/Star.svelte";
    import DocumentCard from "$lib/component-layout/DocumentCard.svelte";
    import CardHead from "$lib/component-layout/CardHead.svelte";

    interface Doc {
        id: string;
        name: string | undefined;
        nameJapanese: string | undefined;
        unique: string | undefined;
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
        <ItemTypeBadge itemType={ItemType.YVideo} />
        <Star {lang} {star} {onStar} />
    </CardHead>
    <span class="mb-2">
        <TitleLabel
            {lang}
            useLink={true}
            name={doc.name}
            nameJapanese={doc.nameJapanese}
        />
    </span>
    {#if doc.unique}
        <iframe
            id={doc.id}
            src="https://www.youtube.com/embed/{doc.unique}"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="rounded-md my-2"
        ></iframe>
        <span class="text-center mt-5">
            <a href="https://www.youtube.com/watch?v={doc.unique}">
                <button
                    class="btn btn-sm btn-circle btn-accent tooltip w-60"
                    data-tip={lang === Lang.Jp
                        ? "Youtubeへ移動する"
                        : "Go to Youtube"}
                >
                    {#if lang === Lang.Jp}
                        📺 Youtubeで見る
                    {:else}
                        📺 Watch on Youtube
                    {/if}
                </button>
            </a>
        </span>
    {/if}
</DocumentCard>
