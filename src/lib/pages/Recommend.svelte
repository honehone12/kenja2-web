<script lang="ts">
    import { Lang, type RecommendResult } from "$lib";
    import historyCtrl from "$lib/client/history-conrol";
    import { ItemType, ITypeConv } from "$lib/documents/anime-search/queries";
    import { onMount } from "svelte";
    import ErrorMessage from "$lib/components/ErrorMessage.svelte";
    import LoadingMessage from "$lib/components/LoadingMessage.svelte";
    import ManualDocuments from "$lib/components/ManualDocuments.svelte";
    import api from "$lib/client/api/api";

    interface Props {
        lang: Lang;
        itemType: ItemType.Anime | ItemType.Character;
    }

    let { lang, itemType }: Props = $props();
    let initializer: Promise<RecommendResult> | undefined = $state();

    async function initialize() {
        const hist =
            itemType === ItemType.Character
                ? await historyCtrl.getCharacterHistory()
                : await historyCtrl.getAnimeHistory();
        const isRecommended = hist.length > 0;

        if (isRecommended) {
            try {
                const result = await api.multiVectorSearch(itemType, hist);
                return { isRecommended, itemType, result };
            } catch {
                console.error("error on multi vector search");
            }
        }

        return {
            isRecommended,
            itemType,
            result: { documents: undefined },
        };
    }

    function itemTypeLabel() {
        return ITypeConv.toLabel(itemType, lang);
    }

    onMount(() => {
        initializer = initialize();
    });
</script>

<main class="py-20 min-h-screen">
    <div class="mb-20 text-center">
        <h1 class="text-3xl font-semibold text-secondary">
            {itemTypeLabel()}
        </h1>
    </div>
    {#if initializer}
        {#await initializer}
            <LoadingMessage />
        {:then { isRecommended, result }}
            {#if isRecommended && result.documents}
                <ManualDocuments
                    {lang}
                    name="Recommended {itemTypeLabel()} for You"
                    nameJapanese="あなたにおすすめの{itemTypeLabel()}"
                    documents={result.documents}
                />
            {:else}
                <div
                    class="text-center card outline outline-secondary p-5 mx-5"
                >
                    <p>
                        {#if lang === Lang.Jp}
                            💡まだ{itemTypeLabel()}をクリックしていないようです。
                            <br />
                            アイテムをクリックするとおすすめが表示されるようになります。
                        {:else}
                            💡It looks like you haven't clicked on the
                            {itemTypeLabel()} yet.
                            <br />
                            Clicking on items will display recommendations.
                        {/if}
                    </p>
                </div>
            {/if}
        {:catch}
            <ErrorMessage {lang} />
        {/await}
    {/if}
</main>
