<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
        title: string | undefined;
    }

    let { lang, title }: Props = $props();
</script>

{#if title}
    <div class="text-center">
        <a
            href="https://tv.dmm.com/vod/list/?categories=15&keyword={title}"
            class="link link-primary"
        >
            <button
                class="btn btn-circle btn-sm btn-accent tooltip w-60"
                data-tip={lang === Lang.Jp
                    ? "DMM TVに移動する"
                    : "Go to DMM TV"}
            >
                {#if lang === Lang.Jp}
                    DMM TVで探す🔎
                {:else}
                    Search on DMM TV 🔎
                {/if}
            </button>
        </a>
    </div>
{/if}
