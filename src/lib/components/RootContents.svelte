<script lang="ts">
    import { Lang } from "$lib";
    import Full from "$lib/component-layout/Full.svelte";
    import type { SearchResult } from "$lib/documents/anime-search/documents";
    import ErrorMessage from "./ErrorMessage.svelte";
    import LoadingMsg from "./LoadingMsg.svelte";
    import ManualDocuments from "./ManualDocuments.svelte";

    export interface RecommendResult {
        isRecommended: boolean;
        result: SearchResult;
    }

    interface Props {
        lang: Lang;
        initializer: Promise<RecommendResult> | undefined;
    }

    let { lang, initializer }: Props = $props();
</script>

{#if initializer}
    {#await initializer}
        <Full>
            <LoadingMsg />
        </Full>
    {:then { isRecommended, result }}
        {#if isRecommended && result.documents}
            <ManualDocuments
                {lang}
                name="Recommended For You"
                nameJapanese="あなたにおすすめ"
                documents={result.documents}
            />
        {:else if result.documents}
            <ManualDocuments
                {lang}
                name="💡Clicking on items will display recommendations."
                nameJapanese="💡アイテムをクリックするとおすすめが表示されるようになります。"
                documents={result.documents}
            />
        {/if}
    {:catch}
        <Full>
            <ErrorMessage {lang} />
        </Full>
    {/await}
{/if}
