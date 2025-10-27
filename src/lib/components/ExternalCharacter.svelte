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
    <menu
        class="card-actions flex flex-wrap justify-center gap-x-2 gap-y-4 w-70"
    >
        <ExternalLinkButton
            link="https://shop.lashinbang.com/products/list?keyword={nameJapanese}"
            label={lang === Lang.Jp
                ? "らしんばんで探す"
                : "Search on LASHINBAN"}
            display={lang === Lang.Jp ? "🔍 らしんばん" : "🔍 LASHINBAN"}
        />
        <ExternalLinkButton
            link="https://www.dmm.com/mono/-/search/=/searchstr={nameJapanese}"
            label={lang === Lang.Jp ? "DMMで探す" : "Search on DMM"}
            display="🔍 DMM"
        />
        <ExternalLinkButton
            link="https://slist.amiami.jp/top/search/list?hanbaichu=1&s_st_list_preorder_available=1&s_st_list_newitem_available=1&s_st_condition_flg=1&s_keywords={nameJapanese}&pagemax=60"
            label={lang === Lang.Jp ? "あみあみで探す" : "Search on amiami"}
            display={lang === Lang.Jp ? "🔍 あみあみ" : "🔍 amiami"}
        />
        <ExternalLinkButton
            link="https://www.animate-onlineshop.jp/products/list.php?mode=search&smt={nameJapanese}"
            label={lang === Lang.Jp ? "アニメイトで探す" : "Search in animate"}
            display={lang === Lang.Jp ? "🔍 アニメイト" : "🔍 animate"}
        />
    </menu>
{/if}
