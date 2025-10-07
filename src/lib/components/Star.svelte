<script lang="ts">
    import { Lang } from "$lib";
    import type { OnUnstar } from "$lib/client/callback";
    import mylistCtrl from "$lib/client/mylist-control";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import { onMount } from "svelte";

    interface Props {
        lang: Lang;
        doc: FlatDocument;
        onUnstar?: OnUnstar;
    }

    let { lang, doc, onUnstar }: Props = $props();
    let star: boolean = $state(false);
    let isInitialized: boolean = false;

    async function onclick() {
        if (!isInitialized) {
            return;
        }

        if (star) {
            await mylistCtrl.unstar(doc.id);
            onUnstar?.(doc.id);
        } else {
            await mylistCtrl.star(doc);
        }

        star = !star;
    }

    function label() {
        return lang === Lang.Jp ? "マイリスト" : "My List";
    }

    onMount(async () => {
        star = await mylistCtrl.hasStar(doc.id);
        isInitialized = true;
    });
</script>

<button {onclick} aria-label={label()} class="tooltip" data-tip={label()}>
    {#if star}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="#FFD54A"
            stroke="#E0B000"
            stroke-width="1"
            stroke-linejoin="round"
        >
            <path
                d="M12 2l3.09 6.26 6.82 1.01-4.93 4.8 1.16 6.93L12 18.77 5.86 21l1.16-6.93L2.09 9.27l6.82-1.01L12 2z"
            />
        </svg>
    {:else}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path
                d="M12 2l3.09 6.26 6.82 1.01-4.93 4.8 1.16 6.93L12 18.77 5.86 21l1.16-6.93L2.09 9.27l6.82-1.01L12 2z"
            />
        </svg>
    {/if}
</button>
