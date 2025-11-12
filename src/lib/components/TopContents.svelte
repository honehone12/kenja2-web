<script lang="ts">
    import type { Lang } from "$lib";
    import Full from "$lib/component-layout/Full.svelte";
    import type { SearchResult } from "$lib/documents/anime-search/documents";
    import Documents from "./Documents.svelte";
    import ErrorMessage from "./ErrorMessage.svelte";
    import LoadingMsg from "./LoadingMsg.svelte";
    import ManualDocuments from "./ManualDocuments.svelte";
    import TopPageFeatures from "./TopPageFeatures.svelte";

    interface Props {
        lang: Lang;
        initializer: (() => Promise<SearchResult>) | null;
    }

    let { lang, initializer }: Props = $props();
</script>

{#if initializer}
    {#await initializer()}
        <Full>
            <LoadingMsg />
        </Full>
    {:then { documents }}
        {#if documents}
            <ManualDocuments
                {lang}
                name="Recommended For You"
                nameJapanese="あなたにおすすめ"
                {documents}
            />
        {:else}
            <TopPageFeatures {lang} />
        {/if}
    {:catch}
        <Full>
            <ErrorMessage {lang} />
        </Full>
    {/await}
{:else}
    <Full>
        <LoadingMsg />
    </Full>
{/if}
