<script lang="ts">
    import { page } from "$app/state";
    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import type {
        FlatDocument,
        SearchResult,
    } from "$lib/documents/anime-search/documents";
    import LoadingMessage from "$lib/components/LoadingMessage.svelte";
    import NoResults from "$lib/components/NoResults.svelte";
    import { Lang, SearchType, HTML_TAG } from "$lib";
    import SearchTipBottom from "$lib/components/SearchTipBottom.svelte";
    import SearchTipTop from "$lib/components/SearchTipTop.svelte";
    import Documents from "$lib/components/Documents.svelte";
    import Full from "$lib/component-layout/Full.svelte";
    import { ITypeConv } from "$lib/documents/anime-search/queries";
    import { onAfterNavigate, onBeforeNavigate } from "$lib/client/navigation";

    interface Props {
        lang: Lang;
        buffer: Promise<SearchResult>;
        searchType: SearchType;
    }

    let { lang, buffer, searchType }: Props = $props();

    function searchKeywords() {
        // if this is shown, kws are wihin limit and there are matched results.
        let kw = page.url.searchParams.get("keyword") ?? "";
        return kw.replace(HTML_TAG, "");
    }

    function itemTypeLabel() {
        const iType = page.url.searchParams.get("item-type");
        // don't show unexpected values;
        return ITypeConv.toLabel(ITypeConv.fromString(iType), lang);
    }

    function searchResultLabel(doc: FlatDocument | undefined) {
        if (!doc) {
            return "";
        }

        switch (searchType) {
            case SearchType.Vector:
                if (lang === Lang.Jp) {
                    const name = doc.name_japanese ?? doc.name;
                    return `"${name}"と似ている${itemTypeLabel()}`;
                } else {
                    return `Similar ${itemTypeLabel()} with "${doc.name}"`;
                }
            case SearchType.Text:
                if (lang === Lang.Jp) {
                    return `"${searchKeywords()}"の${itemTypeLabel()}検索結果`;
                } else {
                    return `Search Results of ${itemTypeLabel()} for "${searchKeywords()}"`;
                }
            case SearchType.Random:
                if (lang === Lang.Jp) {
                    return "ランダム アニメとキャラクター";
                } else {
                    return "Random Anime and Character";
                }
            case SearchType.DirectVector:
                if (lang === Lang.Jp) {
                    return "AI画像ベクトル検索結果";
                } else {
                    return "Result of AI Image Vector Search";
                }
            default:
                return "";
        }
    }

    afterNavigate(onAfterNavigate);

    beforeNavigate(onBeforeNavigate);
</script>

<main>
    <div class="mt-20 mx-5 text-center">
        <h1 class="text-3xl font-semibold text-secondary">
            {#if lang === Lang.Jp}
                検索結果
            {:else}
                Search Results
            {/if}
        </h1>
    </div>
    <SearchTipTop {lang} {searchType} />
    {#await buffer}
        <Full>
            <LoadingMessage />
        </Full>
    {:then { documents }}
        {#if documents && documents.length > 0}
            <div class="py-10">
                <div class="hero w-full">
                    <div
                        class="hero-content card border border-neutral-500 text-center min-w-80 p-5 mx-5 mb-10"
                    >
                        <h2 class="text-lg">
                            {searchResultLabel(documents.at(0))}
                        </h2>
                    </div>
                </div>
                <Documents {lang} {documents} />
            </div>
        {:else}
            <NoResults {lang} />
        {/if}
    {:catch}
        <NoResults {lang} />
    {/await}
    <SearchTipBottom {lang} {searchType} />
</main>
