<script lang="ts">
    import { Lang, type RecommendResult } from "$lib";
    import Full from "$lib/component-layout/Full.svelte";
    import ErrorMessage from "$lib/components/ErrorMessage.svelte";
    import LoadingMessage from "$lib/components/LoadingMessage.svelte";
    import ManualDocuments from "$lib/components/ManualDocuments.svelte";

    interface Props {
        lang: Lang;
        initializer: Promise<RecommendResult> | undefined;
    }

    let { lang, initializer }: Props = $props();
</script>

{#if initializer}
    {#await initializer}
        <Full>
            <LoadingMessage />
        </Full>
    {:then { isRecommended, result }}
        {#if isRecommended && result.documents}
            <ManualDocuments
                {lang}
                name="Recommended for You"
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
