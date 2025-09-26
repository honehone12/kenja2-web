<script lang="ts">
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import Archive from "$lib/pages/Archive.svelte";

    const WINTER_2025: FlatDocument[] = [
        {
            id: "68ad635059f782ec1804151f",
            item_type: 1,
            img: "preview/anime/0e7b6d1950f453e838c3c19e96c0bf21.jpg",
            src: "https://myanimelist.net/anime/58514/Kusuriya_no_Hitorigoto_2nd_Season",
            name: "Kusuriya no Hitorigoto 2nd Season",
            name_english: "The Apothecary Diaries Season 2",
            name_japanese: "薬屋のひとりごと 第2期",
        },
        {
            id: "68ad635059f782ec18041550",
            item_type: 1,
            img: "preview/anime/48198cf1e9e42a2e9552e0dc8f8f987c.jpg",
            src: "https://myanimelist.net/anime/58939/Sakamoto_Days",
            name: "Sakamoto Days",
            name_english: "Sakamoto Days",
            name_japanese: "SAKAMOTO DAYS",
        },
        {
            id: "68ad635059f782ec18041526",
            item_type: 1,
            img: "preview/anime/b4e17b51b974c0cc6526746d52734fa1.jpg",
            src: "https://myanimelist.net/anime/58567/Ore_dake_Level_Up_na_Ken_Season_2__Arise_from_the_Shadow",
            name: "Ore dake Level Up na Ken Season 2: Arise from the Shadow",
            name_english: "Solo Leveling Season 2: Arise from the Shadow",
            name_japanese:
                "俺だけレベルアップな件 Season 2 -Arise from the Shadow-",
        },
        {
            id: "68ad634f59f782ec18041496",
            item_type: 1,
            img: "preview/anime/bdfbe692770bc08e80050f7d1ffdf5bf.jpg",
            src: "https://myanimelist.net/anime/57592/Dr_Stone__Science_Future",
            name: "Dr. Stone: Science Future",
            name_english: "Dr. Stone: Science Future",
            name_japanese: "Dr.STONE SCIENCE FUTURE",
        },
        {
            id: "68ad634f59f782ec180414a1",
            item_type: 1,
            img: "preview/anime/e767c28ac38e15c862084f30c4dc1fb5.jpg",
            src: "https://myanimelist.net/anime/57616/Kimi_no_Koto_ga_Daidaidaidaidaisuki_na_100-nin_no_Kanojo_2nd_Season",
            name: "Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo 2nd Season",
            name_english:
                "The 100 Girlfriends Who Really, Really, Really, Really, Really Love You Season 2",
            name_japanese: "君のことが大大大大大好きな100人の彼女 2期",
        },
        {
            id: "68ad635059f782ec18041516",
            item_type: 1,
            img: "preview/anime/f02f9e99da40a55cfe14e3161e8ed03a.jpg",
            src: "https://myanimelist.net/anime/58502/Zenshuu",
            name: "Zenshuu.",
            name_english: "Zenshu",
            name_japanese: "全修。",
        },
        {
            id: "68ad634f59f782ec180413fc",
            item_type: 1,
            img: "preview/anime/01f43e44cb00fc1191f0206d4e8ebe20.jpg",
            src: "https://myanimelist.net/anime/56701/Watashi_no_Shiawase_na_Kekkon_2nd_Season",
            name: "Watashi no Shiawase na Kekkon 2nd Season",
            name_english: "My Happy Marriage Season 2",
            name_japanese: "わたしの幸せな結婚",
        },
        {
            id: "68ad635059f782ec180415ab",
            item_type: 1,
            img: "preview/anime/c4db1487d2bddfd37dd8e4963b77b0c2.jpg",
            src: "https://myanimelist.net/anime/59361/Kono_Kaisha_ni_Suki_na_Hito_ga_Imasu",
            name: "Kono Kaisha ni Suki na Hito ga Imasu",
            name_english: "I Have a Crush at Work",
            name_japanese: "この会社に好きな人がいます",
        },
        {
            id: "68ad635059f782ec180414fa",
            item_type: 1,
            img: "preview/anime/cc41ccf2b09438f05af25d363d763923.jpg",
            src: "https://myanimelist.net/anime/58271/Honey_Lemon_Soda",
            name: "Honey Lemon Soda",
            name_english: "Honey Lemon Soda",
            name_japanese: "ハニーレモンソーダ",
        },
        {
            id: "68ad635059f782ec18041540",
            item_type: 1,
            img: "preview/anime/6b33a79eafb7081ed889bb5de2c46f2e.jpg",
            src: "https://myanimelist.net/anime/58853/Kuroiwa_Medaka_ni_Watashi_no_Kawaii_ga_Tsuujinai",
            name: "Kuroiwa Medaka ni Watashi no Kawaii ga Tsuujinai",
            name_english: "Medaka Kuroiwa is Impervious to My Charms",
            name_japanese: "黒岩メダカに私の可愛いが通じない",
        },
        {
            id: "68ad635059f782ec1804152f",
            item_type: 1,
            img: "preview/anime/2f06db7fd64afef61c944626015ea7a9.jpg",
            src: "https://myanimelist.net/anime/58600/Ameku_Takao_no_Suiri_Karte",
            name: "Ameku Takao no Suiri Karte",
            name_english: "Ameku M.D.: Doctor Detective",
            name_japanese: "天久鷹央の推理カルテ",
        },
        {
            id: "68ad635059f782ec180414ac",
            item_type: 1,
            img: "preview/anime/2e74fa94a3d65c9e3ef3a37936217676.jpg",
            src: "https://myanimelist.net/anime/57719/Akuyaku_Reijou_Tensei_Ojisan",
            name: "Akuyaku Reijou Tensei Ojisan",
            name_english:
                "From Bureaucrat to Villainess: Dad's Been Reincarnated!",
            name_japanese: "悪役令嬢転生おじさん",
        },
        {
            id: "68ad634e59f782ec180411ba",
            item_type: 1,
            img: "preview/anime/f6ae55648e55254e950afb5718e0069f.jpg",
            src: "https://myanimelist.net/anime/53924/Jibaku_Shounen_Hanako-kun_2",
            name: "Jibaku Shounen Hanako-kun 2",
            name_english: "Toilet-Bound Hanako-kun Season 2",
            name_japanese: "地縛少年花子くん2",
        },
        {
            id: "68ad635059f782ec1804159a",
            item_type: 1,
            img: "preview/anime/70490d4bb754013df9a331b374bf4ff8.jpg",
            src: "https://myanimelist.net/anime/59226/Ao_no_Exorcist__Yosuga-hen",
            name: "Ao no Exorcist: Yosuga-hen",
            name_english: "Blue Exorcist: The Blue Night Saga",
            name_japanese: "青の祓魔師 終夜篇",
        },
        {
            id: "68afc67979d87884b80521d1",
            item_type: 1,
            img: "preview/anime/61cba3350aa780697a5f831fec9670ee.jpg",
            src: "https://myanimelist.net/anime/57648/Nihon_e_Youkoso_Elf-san",
            name: "Nihon e Youkoso Elf-san.",
            name_english: "Welcome to Japan, Ms. Elf!",
            name_japanese: "日本へようこそエルフさん。",
        },
        {
            id: "68ad634f59f782ec1804134c",
            item_type: 1,
            img: "preview/anime/b8b3a6965f4a59385e2843fba4ab6ef3.jpg",
            src: "https://myanimelist.net/anime/55318/Medalist",
            name: "Medalist",
            name_japanese: "メダリスト",
        },
        {
            id: "68ad634f59f782ec18041387",
            item_type: 1,
            img: "preview/anime/e9f5ea02e9e290114461b185c07e5a47.jpg",
            src: "https://myanimelist.net/anime/55842/Okinawa_de_Suki_ni_Natta_Ko_ga_Hougen_Sugite_Tsurasugiru",
            name: "Okinawa de Suki ni Natta Ko ga Hougen Sugite Tsurasugiru",
            name_english:
                "Okitsura: Fell in Love with an Okinawan Girl, but I Just Wish I Know What She's Saying",
            name_japanese: "沖縄で好きになった子が方言すぎてツラすぎる",
        },
        {
            id: "68ad635059f782ec18041566",
            item_type: 1,
            img: "preview/anime/6b79a62a55397776582ef22cd2f427f0.jpg",
            src: "https://myanimelist.net/anime/59055/Hana_wa_Saku_Shura_no_Gotoku",
            name: "Hana wa Saku, Shura no Gotoku",
            name_english: "Flower and Asura",
            name_japanese: "花は咲く、修羅の如く",
        },
        {
            id: "68ad634f59f782ec180413f3",
            item_type: 1,
            img: "preview/anime/6395a2d8dc9cee4a730b5830c0bdbaeb.jpg",
            src: "https://myanimelist.net/anime/56653/BanG_Dream_Ave_Mujica",
            name: "BanG Dream! Ave Mujica",
            name_english: "Ave Mujica: The Die is Cast",
            name_japanese: "BanG Dream! Ave Mujica",
        },
        {
            id: "68ad635059f782ec180414dc",
            item_type: 1,
            img: "preview/anime/440c2ff506975e2be3ee53c2eb46d261.jpg",
            src: "https://myanimelist.net/anime/58066/Sorairo_Utility_TV",
            name: "Sorairo Utility (TV)",
            name_english: "Sorairo Utility",
            name_japanese: "空色ユーティリティ",
        },
        {
            id: "68ad635059f782ec1804158a",
            item_type: 1,
            img: "preview/anime/f00ee59d1dec0f78da8ad00d933b7a4d.jpg",
            src: "https://myanimelist.net/anime/59142/Unnamed_Memory_Act2",
            name: "Unnamed Memory Act.2",
            name_english: "Unnamed Memory Season 2",
            name_japanese: "Unnamed Memory Act.2",
        },
    ];

    let { data } = $props();
</script>

<Archive
    lang={data.lang}
    year="2025"
    yearJapanese="２０２５年"
    season="Winter"
    seasonJapanese="冬"
    list={WINTER_2025}
    backLink={null}
/>
