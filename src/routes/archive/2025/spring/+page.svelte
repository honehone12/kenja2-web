<script lang="ts">
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import Archive from "$lib/pages/Archive.svelte";

    const SPRING_2025: FlatDocument[] = [
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
        {
            id: "68ad635059f782ec180414e7",
            item_type: 1,
            img: "preview/anime/36f0d8d53acc77ed0dfb00fd7f1d2ea5.jpg",
            src: "https://myanimelist.net/anime/58131/Shiunji-ke_no_Kodomotachi",
            name: "Shiunji-ke no Kodomotachi",
            name_english: "The Shiunji Family Children",
            name_japanese: "紫雲寺家の子供たち",
        },
        {
            id: "68ad635059f782ec180415c3",
            item_type: 1,
            img: "preview/anime/841cce0e4c253dcdd6d544bf42d6db1a.jpg",
            src: "https://myanimelist.net/anime/59466/Aharen-san_wa_Hakarenai_Season_2",
            name: "Aharen-san wa Hakarenai Season 2",
            name_english: "Aharen-san wa Hakarenai Season 2",
            name_japanese: "阿波連さんははかれない season2",
        },
        {
            id: "68ad635059f782ec180415a6",
            item_type: 1,
            img: "preview/anime/09cdcdc33d761b49d16dd4fd11569765.jpg",
            src: "https://myanimelist.net/anime/59360/Rock_wa_Lady_no_Tashinami_deshite",
            name: "Rock wa Lady no Tashinami deshite",
            name_english: "Rock Is a Lady's Modesty",
            name_japanese: "ロックは淑女の嗜みでして",
        },
        {
            id: "68ad634b59f782ec18040db8",
            item_type: 1,
            img: "preview/anime/4101321bea7fd9d62bce58c8973f1337.jpg",
            src: "https://myanimelist.net/anime/50694/Summer_Pockets",
            name: "Summer Pockets",
            name_english: "Summer Pockets",
            name_japanese: "Summer Pockets",
        },
        {
            id: "68ad635059f782ec180415d2",
            item_type: 1,
            img: "preview/anime/ab63fec8f8fd660a20e085a942efa141.jpg",
            src: "https://myanimelist.net/anime/59636/Uma_Musume__Cinderella_Gray",
            name: "Uma Musume: Cinderella Gray",
            name_english: "Umamusume: Cinderella Gray",
            name_japanese: "ウマ娘 シンデレラグレイ",
        },
        {
            id: "68ad635059f782ec18041609",
            item_type: 1,
            img: "preview/anime/6195b456f2eea70b81f021b25e6732ab.jpg",
            src: "https://myanimelist.net/anime/60449/Kidou_Senshi_Gundam__GQuuuuuuX",
            name: "Kidou Senshi Gundam: GQuuuuuuX",
            name_english: "Mobile Suit Gundam: GQuuuuuuX",
            name_japanese: "機動戦士 Gundam GQuuuuuuX",
        },
        {
            id: "68ad635059f782ec180415d6",
            item_type: 1,
            img: "preview/anime/100a067df80b8209ffa0a9cca93276a2.jpg",
            src: "https://myanimelist.net/anime/59675/Apocalypse_Hotel",
            name: "Apocalypse Hotel",
            name_english: "Apocalypse Hotel",
            name_japanese: "アポカリプスホテル",
        },
        {
            id: "68ad635059f782ec18041593",
            item_type: 1,
            img: "preview/anime/3e6107fe092cac484ef313eedcec17f7.jpg",
            src: "https://myanimelist.net/anime/59169/Aru_Majo_ga_Shinu_Made",
            name: "Aru Majo ga Shinu Made",
            name_english: "Once Upon a Witch's Death",
            name_japanese: "ある魔女が死ぬまで",
        },
        {
            id: "68ad635059f782ec1804153b",
            item_type: 1,
            img: "preview/anime/929b755204a27032f7256ce68a960486.jpg",
            src: "https://myanimelist.net/anime/58725/Ninja_to_Koroshiya_no_Futarigurashi",
            name: "Ninja to Koroshiya no Futarigurashi",
            name_english: "A Ninja and an Assassin Under One Roof",
            name_japanese: "忍者と殺し屋のふたりぐらし",
        },
        {
            id: "68ad635059f782ec180415df",
            item_type: 1,
            img: "preview/anime/dbdc2c8ad3547b6451668b4863446c5a.jpg",
            src: "https://myanimelist.net/anime/59828/Shoushimin_Series_2nd_Season",
            name: "Shoushimin Series 2nd Season",
            name_english: "Shoshimin: How to Become Ordinary Season 2",
            name_japanese: "小市民シリーズ 第2期",
        },
        {
            id: "68ad635059f782ec18041513",
            item_type: 1,
            img: "preview/anime/d0e982ff7a7cabdda75f6f3b2829a5bb.jpg",
            src: "https://myanimelist.net/anime/58492/Mono",
            name: "Mono",
            name_english: "mono",
            name_japanese: "mono",
        },
        {
            id: "68ad635059f782ec1804161f",
            item_type: 1,
            img: "preview/anime/6fefb432a5a419b2275db80aeb1512e0.jpg",
            src: "https://myanimelist.net/anime/60658/Hibi_wa_Sugiredo_Meshi_Umashi",
            name: "Hibi wa Sugiredo Meshi Umashi",
            name_english: "Food for the Soul",
            name_japanese: "日々は過ぎれど飯うまし",
        },
        {
            id: "68afc67979d87884b80522c9",
            item_type: 1,
            img: "preview/anime/273b1f298bf6a941695896b3fe2b78a5.jpg",
            src: "https://myanimelist.net/anime/59228/Kuroshitsuji__Midori_no_Majo-hen",
            name: "Kuroshitsuji: Midori no Majo-hen",
            name_english: "Black Butler: Emerald Witch Arc",
            name_japanese: "黒執事 -緑の魔女編-",
        },
        {
            id: "68ad635059f782ec18041615",
            item_type: 1,
            img: "preview/anime/42c5d5663d18a1b55968d33593ad9853.jpg",
            src: "https://myanimelist.net/anime/60593/Vigilante__Boku_no_Hero_Academia_Illegals",
            name: "Vigilante: Boku no Hero Academia Illegals",
            name_english: "My Hero Academia: Vigilantes",
            name_japanese: "ヴィジランテ -僕のヒーローアカデミア ILLEGALS-",
        },
        {
            id: "68ad635059f782ec180415eb",
            item_type: 1,
            img: "preview/anime/50eff2fe162e9cf8c58d04879c73e1f7.jpg",
            src: "https://myanimelist.net/anime/60083/Kowloon_Generic_Romance",
            name: "Kowloon Generic Romance",
            name_english: "Kowloon Generic Romance",
            name_japanese: "九龍ジェネリックロマンス",
        },
        {
            id: "68ad634a59f782ec18040c0a",
            item_type: 1,
            img: "preview/anime/539c4c4617a280221974fc89de7f7eaf.jpg",
            src: "https://myanimelist.net/anime/49778/Kijin_Gentoushou",
            name: "Kijin Gentoushou",
            name_english: "Sword of the Demon Hunter: Kijin Gentosho",
            name_japanese: "鬼人幻燈抄",
        },
        {
            id: "68afc67979d87884b80522b3",
            item_type: 1,
            img: "preview/anime/25a5b9509ed012db67748a012c6c0553.jpg",
            src: "https://myanimelist.net/anime/59160/Wind_Breaker_Season_2",
            name: "Wind Breaker Season 2",
            name_english: "Wind Breaker Season 2",
            name_japanese: "WIND BREAKER Season 2",
        },
    ];

    let { data } = $props();
</script>

<Archive
    lang={data.lang}
    year="2025"
    yearJapanese="２０２５年"
    season="Spring"
    seasonJapanese="春"
    list={SPRING_2025}
    backLink={{
        link: "/archive/2025/winter",
        linkJapanese: "/archive/2025/winter?lang=ja",
        name: "2025 Winter Season Anime",
        nameJapanese: "２０２５年冬アニメはこちら"
    }}
/>
