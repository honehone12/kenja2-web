<script lang="ts">
    import { goto } from "$app/navigation";
    import { Lang } from "$lib";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import { ITypeConv } from "$lib/documents/anime-search/queries";

    interface Props {
        lang: Lang;
        doc: FlatDocument;
        onsearch: () => Promise<void>;
    }

    let { lang, doc, onsearch }: Props = $props();

    function linkLabel() {
        return lang === Lang.Jp
            ? "似ているアニメ画像を探す"
            : "Search Similar Anime Images";
    }

    function malSourceLabel() {
        return lang === Lang.Jp ? "MyAnimeList ソース" : "MyAnimeList Source";
    }

    function searchUrl() {
        return `/vectorsearch/buffer/${doc.id}?item-type=${ITypeConv.toString(doc.item_type)}${lang === Lang.Jp ? "&lang=ja" : ""}`;
    }
</script>

<div class="text-center">
    {#if doc.name && doc.img}
        <a
            href={searchUrl()}
            onclick={async (event) => {
                event.preventDefault();

                await onsearch();
                goto(searchUrl());
            }}
            class="tooltip"
            aria-label={linkLabel()}
            data-tip={linkLabel()}
        >
            <img
                id={doc.id}
                src="/{doc.img}"
                alt={lang === Lang.Jp && doc.name_japanese
                    ? `アニメ「${doc.name_japanese}」のキービジュアル`
                    : `The Key Visual of Anime "${doc.name}"`}
                class="card-actions w-60 rounded-md"
                loading="lazy"
            />
            <p class=" link-primary">
                {#if lang === Lang.Jp}
                    画像をクリックして類似検索
                {:else}
                    Click Image to Similarity Search
                {/if}
            </p>
        </a>
    {/if}
    {#if doc.src}
        <a
            href={doc.src}
            aria-label={malSourceLabel()}
            class="tooltip"
            data-tip={malSourceLabel()}
        >
            <p class="link link-primary mt-2">
                {lang === Lang.Jp ? "ソース" : "Source"}
            </p>
        </a>
    {/if}
</div>
