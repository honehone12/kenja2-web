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
        <a href="https://tv.dmm.com/vod/list/?categories=15&keyword={title}">
            <button
                class="btn btn-circle btn-sm btn-accent tooltip w-60"
                data-tip={lang === Lang.Jp
                    ? "DMM TVに移動する"
                    : "Go to DMM TV"}
            >
                {#if lang === Lang.Jp}
                    🔎DMM TVで探す
                {:else}
                    🔎Search on DMM TV
                {/if}
            </button>
        </a>
    </div>
    <div class="text-center mt-5">
        <a
            href="https://animestore.docomo.ne.jp/animestore/sch?searchKey={title}"
        >
            <button
                class="btn btn-circle btn-sm btn-accent tooltip w-60"
                data-tip={lang === Lang.Jp
                    ? "dアニメに移動する"
                    : "Go to d Anime"}
            >
                {#if lang === Lang.Jp}
                    🔎dアニメ で探す
                {:else}
                    🔎Search on d Anime
                {/if}
            </button>
        </a>
    </div>
{/if}
