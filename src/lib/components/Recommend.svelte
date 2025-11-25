<script lang="ts">
    import { Lang, MAX_RECOMMEND_SRC, type RecommendResult } from "$lib";
    import historyCtrl from "$lib/client/history-conrol";
    import { ItemType, ITypeConv } from "$lib/documents/anime-search/queries";
    import { onMount } from "svelte";
    import ErrorMessage from "$lib/components/ErrorMessage.svelte";
    import LoadingMessage from "$lib/components/LoadingMessage.svelte";
    import Documents from "$lib/components/Documents.svelte";
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
        const isRecommended =
            hist.length > 0 && hist.length <= MAX_RECOMMEND_SRC;

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

<div class="mb-20 text-center">
    <h1 class="text-3xl font-semibold text-secondary">
        {itemTypeLabel()}
    </h1>
</div>
{#if initializer}
    {#await initializer}
        <div class="text-center">
            <LoadingMessage />
        </div>
    {:then { isRecommended, result }}
        {#if isRecommended && result.documents}
            <div class="hero w-full">
                <div
                    class="hero-content card border border-neutral-500 text-center min-w-80 p-5 mb-10 mx-5"
                >
                    <h2 class="text-xl">
                        {lang === Lang.Jp
                            ? `あなたにおすすめの${itemTypeLabel()}`
                            : `Recommended ${itemTypeLabel()} for You`}
                    </h2>
                </div>
            </div>
            <Documents {lang} documents={result.documents} />
        {:else}
            <div class="hero w-full">
                <div
                    class="hero-content text-center card outline outline-secondary p-5 mx-5"
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
            </div>
        {/if}
    {:catch}
        <div class="text-center">
            <ErrorMessage {lang} />
        </div>
    {/await}
{/if}
