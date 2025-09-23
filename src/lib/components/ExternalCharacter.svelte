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
            link="https://shop.lashinbang.com/products/list?keyword={nameJapanese}"
            label={lang === Lang.Jp
                ? "らしんばんで探す"
                : "Search on LASHINBAN"}
            name={lang === Lang.Jp ? "🔍 らしんばん" : "🔍 LASHINBAN"}
        />
        <ExternalLinkButton
            link="https://order.mandarake.co.jp/order/listPage/list?keyword={nameJapanese}"
            label={lang === Lang.Jp
                ? "まんだらけで探す"
                : "Search on MANDARAKE"}
            name={lang === Lang.Jp ? "🔍 まんだらけ" : "🔍 MANDARAKE"}
        />
        <ExternalLinkButton
            link="https://slist.amiami.jp/top/search/list?hanbaichu=1&s_st_list_preorder_available=1&s_st_list_newitem_available=1&s_st_condition_flg=1&s_keywords={nameJapanese}&pagemax=60"
            label={lang === Lang.Jp ? "あみあみで探す" : "Search on amiami"}
            name={lang === Lang.Jp ? "🔍 あみあみ" : "🔍 amiami"}
        />
        <ExternalLinkButton
            link="https://www.animate-onlineshop.jp/products/list.php?mode=search&smt={nameJapanese}"
            label={lang === Lang.Jp ? "アニメイトで探す" : "Search in animate"}
            name={lang === Lang.Jp ? "🔍 アニメイト" : "🔍 animate"}
        />
    </div>
{/if}
