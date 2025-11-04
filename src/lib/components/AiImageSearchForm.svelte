<script lang="ts">
    import { Lang } from "$lib";
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
    <LoadingMsg />
{:then}
    {#if pending}
        <LoadingMsg />
    {:else}
        <form
            onsubmit={(event) => {
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
                <FilePicker {lang} />
            </div>
            <div class="mt-10">
                <ItemTypeRadioVector {lang} />
            </div>
            <div class="text-center">
                <button
                    type="submit"
                    disabled={pending}
                    class="btn btn-accent mt-10"
                >
                    {lang === Lang.Jp ? "検索" : "Search"}
                </button>
            </div>
        </form>
    {/if}
{:catch}
    <ErrorMessage {lang} />
{/await}
