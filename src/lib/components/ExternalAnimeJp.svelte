<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
        nameJapnese: string | undefined;
    }

    let { lang, nameJapnese }: Props = $props();

    function dmmLabel() {
        return lang === Lang.Jp ? "DMM TVで探す" : "Search on DMM TV";
    }

    function dAnimeLabel() {
        return lang === Lang.Jp ? "d Animeで探す" : "Search on d Anime";
    }

    function bookOffLabel() {
        return lang === Lang.Jp ? "ブックオフで探す" : "Search on BOOK OFF";
    }

    function surugaYaLabel() {
        return lang === Lang.Jp ? "駿河屋で探す" : "Search on Suruga Ya";
    }
</script>

{#if nameJapnese}
    <div
        class="card-actions flex flex-wrap justify-center gap-x-2 gap-y-4 w-70"
    >
        <div class="text-center">
            <a
                href="https://tv.dmm.com/vod/list/?categories=15&keyword={nameJapnese}"
            >
                <button
                    class="btn btn-circle btn-sm btn-accent tooltip w-34"
                    aria-label={dmmLabel()}
                    data-tip={dmmLabel()}
                >
                    📺 DMM TV
                </button>
            </a>
        </div>
        <div class="text-center">
            <a
                href="https://animestore.docomo.ne.jp/animestore/sch?searchKey={nameJapnese}"
            >
                <button
                    class="btn btn-circle btn-sm btn-accent tooltip w-34"
                    aria-label={dAnimeLabel()}
                    data-tip={dAnimeLabel()}
                >
                    {#if lang === Lang.Jp}
                        📺 dアニメ
                    {:else}
                        📺 d Anime
                    {/if}
                </button>
            </a>
        </div>
        <div class="text-center">
            <a
                href="https://shopping.bookoff.co.jp/search/genre/7102/keyword/{nameJapnese}"
            >
                <button
                    class="btn btn-circle btn-sm btn-accent tooltip w-34"
                    aria-label={bookOffLabel()}
                    data-tip={bookOffLabel()}
                >
                    {#if lang === Lang.Jp}
                        💿 ブックオフ
                    {:else}
                        💿 BOOK OFF
                    {/if}
                </button>
            </a>
        </div>
        <div class="text-center">
            <a
                href="https://www.suruga-ya.jp/search?category=300&search_word={nameJapnese}"
            >
                <button
                    class="btn btn-circle btn-sm btn-accent tooltip w-34"
                    aria-label={surugaYaLabel()}
                    data-tip={surugaYaLabel()}
                >
                    {#if lang === Lang.Jp}
                        💿 駿河屋
                    {:else}
                        💿 SURUGA-YA
                    {/if}
                </button>
            </a>
        </div>
    </div>
{/if}
