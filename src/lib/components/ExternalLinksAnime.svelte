<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
        nameJapnese: string | undefined;
    }

    let { lang, nameJapnese }: Props = $props();
</script>

{#if nameJapnese}
    <div class="text-center">
        <a
            href="https://tv.dmm.com/vod/list/?categories=15&keyword={nameJapnese}"
        >
            <button
                class="btn btn-circle btn-sm btn-accent tooltip w-60"
                data-tip={lang === Lang.Jp
                    ? "DMM TVに移動する"
                    : "Go to DMM TV"}
            >
                {#if lang === Lang.Jp}
                    🔎　DMM TVで探す
                {:else}
                    🔎　Search on DMM TV
                {/if}
            </button>
        </a>
    </div>
    <div class="text-center mt-5">
        <a
            href="https://animestore.docomo.ne.jp/animestore/sch?searchKey={nameJapnese}"
        >
            <button
                class="btn btn-circle btn-sm btn-accent tooltip w-60"
                data-tip={lang === Lang.Jp
                    ? "dアニメに移動する"
                    : "Go to d Anime"}
            >
                {#if lang === Lang.Jp}
                    🔎　dアニメで探す
                {:else}
                    🔎　Search on d Anime
                {/if}
            </button>
        </a>
    </div>
    <div class="text-center mt-5">
        <a
            href="https://shopping.bookoff.co.jp/search/genre/7102/keyword/{nameJapnese}"
        >
            <button
                class="btn btn-circle btn-sm btn-accent tooltip w-60"
                data-tip={lang === Lang.Jp
                    ? "ブックオフに移動する"
                    : "Go to BOOK OFF"}
            >
                {#if lang === Lang.Jp}
                    💿　ブックオフで探す
                {:else}
                    💿　Search on BOOK OFF
                {/if}
            </button>
        </a>
    </div>
{/if}
