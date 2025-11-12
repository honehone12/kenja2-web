<script lang="ts">
    import { Lang } from "$lib";
    import Full from "$lib/component-layout/Full.svelte";
    import type { SearchResult } from "$lib/documents/anime-search/documents";
    import ErrorMessage from "./ErrorMessage.svelte";
    import LoadingMsg from "./LoadingMsg.svelte";
    import ManualDocuments from "./ManualDocuments.svelte";
    import TopFeatures from "./TopFeatures.svelte";

    interface Props {
        lang: Lang;
        initializer: (() => Promise<SearchResult>) | undefined;
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
            <div class="flex place-content-center">
                <div class="card text-center border border-secondary p-5 mx-10">
                    <p>
                        {#if lang === Lang.Jp}
                            💡
                            アイテムをクリックするとおすすめが表示されるようになります。
                        {:else}
                            💡 Clicking on items will display recommendations.
                        {/if}
                    </p>
                </div>
            </div>
            <TopFeatures {lang} />
        {/if}
    {:catch}
        <Full>
            <ErrorMessage {lang} />
        </Full>
    {/await}
{/if}
