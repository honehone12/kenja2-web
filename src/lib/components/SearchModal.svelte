<script lang="ts">
    import { Lang } from "$lib";
    import { SEARCH_MODAL_ID } from "$lib/client/modal";
    import TextSearchForm from "$lib/components/TextSearchForm.svelte";

    interface Props {
        lang: Lang;
        onclickClose: () => void;
    }

    let { lang, onclickClose }: Props = $props();
</script>

<dialog id={SEARCH_MODAL_ID} class="modal">
    <div class="modal-box flex flex-col items-center outline outline-secondary">
        <form method="dialog">
            <button
                class="btn btn-sm btn-secondary btn-outline btn-circle absolute right-2 top-2"
                aria-label={lang === Lang.Jp ? "閉じる" : "Close"}
                onclick={onclickClose}>X</button
            >
        </form>
        <span class="mt-20">
            <h2 class="text-2xl text-secondary">
                {#if lang === Lang.Jp}
                    キーワード検索
                {:else}
                    Keywords Search
                {/if}
            </h2>
        </span>
        <div class="modal-action mt-10 mb-10">
            <TextSearchForm
                {lang}
                useFlexible={false}
                onsubmit={onclickClose}
            />
        </div>
    </div>
</dialog>
