<script lang="ts">
    import { Lang } from "$lib";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import TitleLabel from "$lib/components/TitleLabel.svelte";
    import Star from "$lib/components/Star.svelte";

    interface Props {
        lang: Lang;
        name: string | undefined;
        nameJapanese: string | undefined;
        unique: string | undefined;
        star: boolean;
        onStar: (star: boolean) => Promise<void>;
    }

    let { lang, name, nameJapanese, unique, star, onStar }: Props = $props();
</script>

{#if unique}
    <div class="card w-80 outline outline-secondary">
        <div class="card-body">
            <div class="w-68 mb-5">
                <span class="flex justify-between">
                    <ItemTypeBadge itemType={ItemType.YVideo} />
                    <Star {lang} {star} {onStar} />
                </span>
            </div>
            <span class="mb-2">
                <TitleLabel {lang} useLink={true} {name} {nameJapanese} />
            </span>
            <iframe
                src="https://www.youtube-nocookie.com/embed/{unique}"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="rounded-md my-2"
            ></iframe>
            <span class="text-center mt-5">
                <a href="https://www.youtube.com/watch?v={unique}">
                    <button
                        class="btn btn-sm btn-circle btn-accent tooltip w-60"
                        data-tip={lang === Lang.Jp
                            ? "Youtubeへ移動する"
                            : "Go to Youtube"}
                    >
                        {#if lang === Lang.Jp}
                            📺　Youtubeで見る
                        {:else}
                            📺　Watch on Youtube
                        {/if}
                    </button>
                </a>
            </span>
        </div>
    </div>
{/if}
