<script lang="ts">
    import { Lang, SPLITTER } from "$lib";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import TitleLabel from "$lib/components/TitleLabel.svelte";
    import ImageVectorSearch from "$lib/components/ImageVectorSearch.svelte";
    import Star from "$lib/components/Star.svelte";
    import ExternalAnime from "./ExternalAnime.svelte";

    interface Doc {
        id: string;
        name: string | undefined;
        nameEnglish: string | undefined;
        nameJapanese: string | undefined;
        img: string | undefined;
        src: string | undefined;
    }

    interface Props {
        lang: Lang;
        doc: Doc;
        star: boolean;
        onStar: (star: boolean) => Promise<void>;
    }

    let { lang, doc, star, onStar }: Props = $props();

    function extractTitle(raw: string) {
        // be careful for ordering
        const clean = raw
            .replace("映画", " ")
            .replace("劇場版", " ")
            .replace("テレビアニメーション", " ")
            .replace("テレビアニメ", " ")
            .replace("TVアニメ", " ")
            .replace("OVA", " ")
            .replace("オリジナルビデオアニメーション", " ")
            .replace("アニメーション", " ")
            .trim();

        const split = clean.split(SPLITTER).filter((value) => value.length > 1);
        return split.at(0) ?? clean;
    }
</script>

<div class="card w-80 outline outline-secondary">
    <div class="card-body">
        <div class="w-68 mb-5">
            <span class="flex justify-between">
                <ItemTypeBadge itemType={ItemType.Anime} />
                <Star {lang} {star} {onStar} />
            </span>
        </div>
        {#if doc.nameEnglish}
            <h3>{doc.nameEnglish}</h3>
        {/if}
        <span class="mb-5">
            <TitleLabel
                {lang}
                useLink={true}
                name={doc.name}
                nameJapanese={doc.nameJapanese}
            />
        </span>
        <ImageVectorSearch
            {lang}
            doc={{
                id: doc.id,
                itemType: ItemType.Anime,
                name: doc.name,
                nameJapanese: doc.nameJapanese,
                img: doc.img,
                src: doc.src,
            }}
        />
        <div class="mt-5">
            {#if doc.nameJapanese}
                <ExternalAnime
                    {lang}
                    nameJapanese={extractTitle(doc.nameJapanese)}
                />
            {/if}
        </div>
    </div>
</div>
