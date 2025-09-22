<script lang="ts">
    import { Lang } from "$lib";
    import {
        ITypeConv,
        type ItemType,
    } from "$lib/documents/anime-search/queries";

    interface Doc {
        id: string;
        itemType: ItemType;
        name: string | undefined;
        nameJapanese: string | undefined;
        img: string | undefined;
        src: string | undefined;
    }

    interface Props {
        lang: Lang;
        doc: Doc;
    }

    let { lang, doc }: Props = $props();

    function linkLabel() {
        return lang === Lang.Jp
            ? "似ているアニメ画像を探す"
            : "Search Similar Anime Images";
    }
</script>

<div class="text-center">
    {#if doc.name && doc.img}
        <a
            href="/vectorsearch/buffer/{doc.id}?item-type={ITypeConv.toString(
                doc.itemType,
            )}{lang === Lang.Jp ? '&lang=ja' : ''}"
            class="tooltip"
            aria-label={linkLabel()}
            data-tip={linkLabel()}
        >
            <img
                src="/{doc.img}"
                alt={lang === Lang.Jp && doc.nameJapanese
                    ? `アニメ「${doc.nameJapanese}」のキービジュアル`
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
        <a href={doc.src}>
            <p class="link link-primary mt-2">
                {lang === Lang.Jp ? "ソース" : "Source"}
            </p>
        </a>
    {/if}
</div>
