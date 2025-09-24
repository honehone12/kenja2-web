<script lang="ts">
    import { Lang } from "$lib";
    import ExternalLinkButton from "./ExternalLinkButton.svelte";

    interface Props {
        lang: Lang;
        nameJapanese: string | undefined;
    }

    let { lang, nameJapanese }: Props = $props();
</script>

{#if nameJapanese}
    <div
        class="card-actions flex flex-wrap justify-center gap-x-2 gap-y-4 w-70"
    >
        <ExternalLinkButton
            link="https://tv.dmm.com/vod/list/?categories=15&keyword=%KENJA_LINK%"
            name={nameJapanese}
            useExtraction
            label={lang === Lang.Jp ? "DMM TVで探す" : "Search on DMM TV"}
            display="📺 DMM TV"
        />
        <ExternalLinkButton
            link="https://animestore.docomo.ne.jp/animestore/sch?searchKey=%KENJA_LINK%"
            name={nameJapanese}
            useExtraction
            label={Lang.Jp ? "d Animeで探す" : "Search on d Anime"}
            display={lang === Lang.Jp ? "📺 dアニメ" : "📺 d Anime"}
        />
        <ExternalLinkButton
            link="https://shopping.bookoff.co.jp/search/genre/7102/keyword/%KENJA_LINK%"
            name={nameJapanese}
            useExtraction
            label={Lang.Jp ? "ブックオフで探す" : "Search on BOOK OFF"}
            display={lang === Lang.Jp ? "💿 ブックオフ" : "💿 BOOK OFF"}
        />
        <ExternalLinkButton
            link="https://www.suruga-ya.jp/search?category=300&search_word=%KENJA_LINK%"
            name={nameJapanese}
            useExtraction
            label={Lang.Jp ? "駿河屋で探す" : "Search on Suruga Ya"}
            display={lang === Lang.Jp ? "💿 駿河屋" : "💿 SURUGA-YA"}
        />
    </div>
{/if}
