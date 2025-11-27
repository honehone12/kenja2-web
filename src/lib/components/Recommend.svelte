<script lang="ts">
    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import { Lang } from "$lib";
    import { ITypeConv } from "$lib/documents/anime-search/queries";
    import ErrorMessage from "$lib/components/ErrorMessage.svelte";
    import LoadingMessage from "$lib/components/LoadingMessage.svelte";
    import Documents from "$lib/components/Documents.svelte";
    import type { RecommendResult } from "$lib/documents/anime-search/documents";
    import { onAfterNavigate, onBeforeNavigate } from "$lib/client/navigation";

    interface Props {
        lang: Lang;
        recommend: RecommendResult;
    }

    let { lang, recommend }: Props = $props();

    function itemTypeLabel() {
        return ITypeConv.toLabel(recommend.itemType, lang);
    }

    afterNavigate(onAfterNavigate);

    beforeNavigate(onBeforeNavigate);
</script>

<div class="mb-10 text-center">
    <h1 class="text-3xl font-semibold text-secondary">
        {lang === Lang.Jp
            ? `おすすめ${itemTypeLabel()}`
            : `Recommended ${itemTypeLabel()}`}
    </h1>
</div>
{#await recommend.bufferedStream}
    <div class="text-center">
        <LoadingMessage />
    </div>
{:then { documents }}
    {#if recommend.isRecommended && documents}
        <div class="hero w-full">
            <div
                class="hero-content card border border-neutral-500 text-center min-w-80 p-5 mb-10 mx-5"
            >
                <h2 class="text-xl">
                    {lang === Lang.Jp
                        ? `あなたにおすすめの${itemTypeLabel()}`
                        : `Suggested ${itemTypeLabel()} for You`}
                </h2>
            </div>
        </div>
        <Documents {lang} {documents} />
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
