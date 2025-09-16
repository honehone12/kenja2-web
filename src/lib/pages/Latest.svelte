<script lang="ts">
    import { Lang } from "$lib";
    import ManualDocumentsBundle from "$lib/components/ManualDocumentsBundle.svelte";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";

    const LATEST_LIST: FlatDocument[] = [
        {
            id: "68ad634f59f782ec180413ba",
            item_type: 1,
            img: "preview/anime/6485172ee4d4667052170351ef8d67f0.jpg",
            src: "https://myanimelist.net/anime/56038/Lazarus",
            name: "Lazarus",
            name_japanese: "ラザロ",
        },
        {
            id: "68ad635059f782ec180415cc",
            item_type: 1,
            img: "preview/anime/7383bb1fe46a4bf8a8daddac41451239.jpg",
            src: "https://myanimelist.net/anime/59597/Witch_Watch",
            name: "Witch Watch",
            name_english: "Witch Watch",
            name_japanese: "ウィッチウォッチ",
        },
        {
            id: "68afc67979d87884b8051ccd",
            item_type: 1,
            img: "preview/anime/ea48df9a24313a5cb6b756ba194b8ffe.jpg",
            src: "https://myanimelist.net/anime/51818/Enen_no_Shouboutai__San_no_Shou",
            name: "Enen no Shouboutai: San no Shou",
            name_english: "Fire Force Season 3",
            name_japanese: "炎炎ノ消防隊 参ノ章",
        },
        {
            id: "68ad634d59f782ec18041027",
            item_type: 1,
            img: "preview/anime/0ec47c76c6d32d4a7cc2192182b0d174.jpg",
            src: "https://myanimelist.net/anime/52709/Danjo_no_Yuujou_wa_Seiritsu_suru_Iya_Shinai",
            name: "Danjo no Yuujou wa Seiritsu suru? (Iya, Shinai!!)",
            name_english: "Can a Boy-Girl Friendship Survive?",
            name_japanese: "男女の友情は成立する？（いや、しないっ!!）",
        },
    ];

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();
</script>

<div class="py-20">
    <div class="hero w-full">
        <span class="text-center">
            <h1 class="text-secondary text-3xl mb-20">
                {#if lang === Lang.Jp}
                    最新アニメ
                {:else}
                    Latest Anime
                {/if}
            </h1>
            <p>
                {#if lang === Lang.Jp}
                    私がイッキ見派のため、１シーズン遅れて追加されます。<br />
                    ２０２５年夏アニメは近日追加予定です。
                {:else}
                    Since I'm a binge-watcher, the new season will be added one
                    season late. <br />
                    The summer 2025 anime will be added soon.
                {/if}
            </p>
        </span>
    </div>
    <ManualDocumentsBundle
        {lang}
        bundle={[
            {
                name: "2025 Spring",
                nameJapanese: "２０２５年 春",
                list: LATEST_LIST,
            },
        ]}
    />
</div>
