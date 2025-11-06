<script lang="ts">
    import { Lang } from "$lib";
    import ai from "$lib/client/ai/ai";
    import ErrorMessage from "./ErrorMessage.svelte";
    import FilePicker from "./FilePicker.svelte";
    import ItemTypeRadioVector from "./ItemTypeRadioVector.svelte";
    import LoadingMsg from "./LoadingMsg.svelte";

    interface Props {
        lang: Lang;
        initialize: () => Promise<void>;
        onsubmit: (file: File, itemType: string) => Promise<void>;
    }

    let { lang, initialize, onsubmit }: Props = $props();
    let pending = $state(false);
</script>

{#await initialize()}
    <div class="text-center">
        <span class="text-lg">
            <p>
                {lang === Lang.Jp
                    ? "AIモデルの準備中です"
                    : "Preparing AI Model"}
            </p>
        </span>
        <LoadingMsg />
    </div>
{:then}
    {#if pending}
        <div class="text-center">
            <span class="text-lg">
                <p>
                    {lang === Lang.Jp ? "AIの推論中です" : "AI is inferring"}
                </p>
            </span>
            <LoadingMsg />
        </div>
    {:else}
        <form
            onsubmit={async (event) => {
                if (pending) {
                    return;
                }

                event.preventDefault();
                const form = new FormData(event.currentTarget);
                const file: File | null = form.get("file") as File | null;
                if (!file) {
                    return;
                }
                const itemType = form.get("item-type") as string | null;
                if (!itemType) {
                    return;
                }
                pending = true;
                onsubmit(file, itemType);
            }}
        >
            <div class="text-center">
                <p class="text-lg text-secondary">
                    {#if lang === Lang.Jp}
                        推論デバイス: {ai.device()}
                    {:else}
                        Inference Device: {ai.device()}
                    {/if}
                </p>
            </div>
            <div class="mt-10">
                <FilePicker {lang} />
            </div>
            <div class="mt-10">
                <ItemTypeRadioVector {lang} />
            </div>
            <div class="text-center">
                <button
                    type="submit"
                    disabled={pending}
                    class="btn btn-accent mt-10 min-w-30"
                >
                    {lang === Lang.Jp ? "検索" : "Search"}
                </button>
            </div>
        </form>
    {/if}
{:catch}
    <ErrorMessage {lang} />
{/await}
