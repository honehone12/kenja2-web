<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents"
    import {getModal, DOCUMENT_MODAL_ID} from "$lib";
    import DocumentModal from "$lib/components/DocumentModal.svelte";
    import TopDocuments from "./TopDocuments.svelte";

    const MY_TOP_ANI: FlatDocument[] = [
        {
            id: '688a101a9a566ea0f548dca2',
            item_type: 1,
            url: 'https://myanimelist.net/anime/34599/Made_in_Abyss',
            img: '/preview/2febf59c900a6bb03a6daf0de537d781.jpg',
            parent: undefined,
            name: 'Made in Abyss',
            name_english: 'Made in Abyss',
            name_japanese: 'メイドインアビス'
        },
        {
            id: '688a0ff39a566ea0f548b61b',
            item_type: 1,
            url: 'https://myanimelist.net/anime/5680/K-On',
            img: '/preview/a3cef407658f20b4a753bd1f0efe6f24.jpg',
            parent: undefined,
            name: 'K-On!',
            name_english: 'K-ON!',
            name_japanese: 'けいおん!'
        },
        {
            id: '688a0fca9a566ea0f5489bf6',
            item_type: 1,
            url: 'https://myanimelist.net/anime/477/Aria_the_Animation',
            img: '/preview/9f1d03c5ea2af198609cca4f5d52a78b.jpg',
            parent: undefined,
            name: 'Aria the Animation',
            name_english: 'Aria the Animation',
            name_japanese: 'ARIA The ANIMATION'
        },
        {
            id: '688a10179a566ea0f548da2c',
            item_type: 1,
            url: 'https://myanimelist.net/anime/33502/Shuumatsu_Nani_Shitemasu_ka_Isogashii_desu_ka_Sukutte_Moratte_Ii_desu_ka',
            img: '/preview/338c8774d36b57698182eaa6eb6b6cc5.jpg',
            parent: undefined,
            name: 'Shuumatsu Nani Shitemasu ka? Isogashii desu ka? Sukutte Moratte Ii desu ka?',
            name_english: 'WorldEnd: What do you do at the end of the world? Are you busy? Will you save us?',
            name_japanese: '終末なにしてますか？忙しいですか？救ってもらっていいですか？'
        },
        {
            id: '688a102a9a566ea0f548ebab',
            item_type: 1,
            url: 'https://myanimelist.net/anime/41457/86',
            img: '/preview/5a5b8a5f175d7595e0ab7a7d471e6359.jpg',
            parent: undefined,
            name: '86',
            name_english: '86 Eighty-Six',
            name_japanese: '86―エイティシックス―'
        },
        {
            id: '688a101c9a566ea0f548df04',
            item_type: 1,
            url: 'https://myanimelist.net/anime/35851/Sayonara_no_Asa_ni_Yakusoku_no_Hana_wo_Kazarou',
            img: '/preview/c6d91b5a7a25895a4b11575494e80b11.jpg',
            parent: undefined,
            name: 'Sayonara no Asa ni Yakusoku no Hana wo Kazarou',
            name_english: 'Maquia: When the Promised Flower Blooms',
            name_japanese: 'さよならの朝に約束の花をかざろう'
        },
        {
            id: '688a10139a566ea0f548d4dc',
            item_type: 1,
            url: 'https://myanimelist.net/anime/31433/Ginga_Eiyuu_Densetsu__Die_Neue_These_-_Kaikou',
            img: '/preview/ab03fb3101f0584a679c01ff88300a19.jpg',
            parent: undefined,
            name: 'Ginga Eiyuu Densetsu: Die Neue These - Kaikou',
            name_english: 'Legend of the Galactic Heroes: Die Neue These',
            name_japanese: '銀河英雄伝説 Die Neue These 邂逅'
        },
        {
            id: '688a0fbb9a566ea0f54891b4',
            item_type: 1,
            url: 'https://myanimelist.net/anime/24/School_Rumble',
            img: '/preview/eba62bd996b26a902042e154b81f4dd0.jpg',
            parent: undefined,
            name: 'School Rumble',
            name_english: 'School Rumble',
            name_japanese: 'スクールランブル'
        }
    ];

    const MY_TOP_CHARA: FlatDocument[] = [
        {
            id: '688a0ff29a566ea0f548b51a',
            item_type: 2,
            url: 'https://myanimelist.net/character/24195/Tsukihi_Araragi',
            img: '/preview/aeef4f1b5ca4ae784063e792936fa9c5.jpg',
            parent: {
                id: '688a0ff19a566ea0f548b4e7',
                name: 'Bakemonogatari',
                name_japanese: '化物語'
            },
            name: 'Tsukihi Araragi',
            name_english: undefined,
            name_japanese: '阿良々木 月火'
        },
        {
            id: '688a10109a566ea0f548d231',
            item_type: 2,
            url: 'https://myanimelist.net/character/122211/Nao_Tomori',
            img: '/preview/176a66b2a67ddda023a086beaaab9a44.jpg',
            parent: {
                id: '688a10109a566ea0f548d1ea',
                name: 'Charlotte',
                name_japanese: 'Charlotte（シャーロット）'
            },
            name: 'Nao Tomori',
            name_english: undefined,
            name_japanese: '友利 奈緒'
        },
        {
            id: '688a0fc89a566ea0f5489ab0',
            item_type: 2,
            url: 'https://myanimelist.net/character/503/Illyasviel_von_Einzbern',
            img: '/preview/db20cdd24b038820c80702bd93c23081.jpg',
            parent: {
                id: '688a0fc89a566ea0f5489a4a',
                name: 'Fate/stay night',
                name_japanese: 'Fate/stay night'
            },
            name: 'Illyasviel von Einzbern',
            name_english: undefined,
            name_japanese: 'イリヤスフィール・フォン・アインツベルン'
        },
        {
            id: '688a100c9a566ea0f548cdb1',
            item_type: 2,
            url: 'https://myanimelist.net/character/90177/Utaha_Kasumigaoka',
            img: '/preview/d096bf0579635e27e946d1d166b02abf.jpg',
            parent: {
                id: '688a100c9a566ea0f548cd4f',
                name: 'Saenai Heroine no Sodatekata',
                name_japanese: '冴えない彼女〈ヒロイン〉の育てかた'
            },
            name: 'Utaha Kasumigaoka',
            name_english: undefined,
            name_japanese: '霞ヶ丘 詩羽'
        },
        {
            id: '688a10209a566ea0f548e086',
            item_type: 2,
            url: 'https://myanimelist.net/character/73953/Lacia',
            img: '/preview/b77aabf2ffaa71dd418a049f9d202e18.jpg',
            parent: {
                id: '688a101f9a566ea0f548e031',
                name: 'Beatless',
                name_japanese: 'BEATLESS'
            },
            name: 'Lacia',
            name_english: undefined,
            name_japanese: 'レイシア'
        },
        {
            id: '688a0fbc9a566ea0f548921e',
            item_type: 2,
            url: 'https://myanimelist.net/character/94/Asuka_Langley_Souryuu',
            img: '/preview/f073aa6a5a6e9b2124d96d2b09f820d0.jpg',
            parent: {
                id: '688a0fbc9a566ea0f54891ba',
                name: 'Shinseiki Evangelion',
                name_japanese: '新世紀エヴァンゲリオン'
            },
            name: 'Asuka Langley Souryuu',
            name_english: undefined,
            name_japanese: '惣流・アスカ・ラングレー'
        },
        {
            id: '688a0ff99a566ea0f548bb77',
            item_type: 2,
            url: 'https://myanimelist.net/character/4963/Yuno_Gasai',
            img: '/preview/731f5ccd21666ea768c120afe1861a91.jpg',
            parent: {
                id: '688a0ff99a566ea0f548bb2e',
                name: 'Mirai Nikki',
                name_japanese: '未来日記'
            },
            name: 'Yuno Gasai',
            name_english: undefined,
            name_japanese: '我妻 由乃'
        },
        {
            id: '688a10369a566ea0f548f83e',
            item_type: 2,
            url: 'https://myanimelist.net/character/236481/Sayo_Minakami',
            img: '/preview/542a11074024f4cf53b9c5bcb7b330d1.jpg',
            parent: {
                id: '688a10369a566ea0f548f7ea',
                name: 'Mahou Shoujo ni Akogarete',
                name_japanese: '魔法少女にあこがれて'
            },
            name: 'Sayo Minakami',
            name_english: undefined,
            name_japanese: '水神 小夜'
        }
    ];

    const MAL_TOP_ANI: FlatDocument[] = [
        {
            id: '688a0fbb9a566ea0f5489085',
            item_type: 1,
            url: 'https://myanimelist.net/anime/21/One_Piece',
            img: '/preview/d5c9f74b65da3cc53fdac69a98cdea9d.jpg',
            parent: undefined,
            name: 'One Piece',
            name_english: 'One Piece',
            name_japanese: 'ONE PIECE'
        },
        {
            id: '688a0ff19a566ea0f548b4ee',
            item_type: 1,
            url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
            img: '/preview/ec295b429e2a96278a17fd01d84f6201.jpg',
            parent: undefined,
            name: 'Fullmetal Alchemist: Brotherhood',
            name_english: 'Fullmetal Alchemist: Brotherhood',
            name_japanese: '鋼の錬金術師 FULLMETAL ALCHEMIST'
        },
        {
            id: '688a10009a566ea0f548c096',
            item_type: 1,
            url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
            img: '/preview/b1ad8a78ce4987c3d4c26e452bd6099f.jpg',
            parent: undefined,
            name: 'Hunter x Hunter (2011)',
            name_english: 'Hunter x Hunter',
            name_japanese: 'HUNTER×HUNTER（ハンター×ハンター）'
        },
        {
            id: '688a0ffa9a566ea0f548bc4a',
            item_type: 1,
            url: 'https://myanimelist.net/anime/9253/Steins_Gate',
            img: '/preview/772b2b3cbfbf0c7497efb830e4df9126.jpg',
            parent: undefined,
            name: 'Steins;Gate',
            name_english: 'Steins;Gate',
            name_japanese: 'STEINS;GATE'
        },
        {
            id: '688a10069a566ea0f548c6e8',
            item_type: 1,
            url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
            img: '/preview/38f2d453f4b8aeeba8b465ae2cfd08a8.jpg',
            parent: undefined,
            name: 'Shingeki no Kyojin',
            name_english: 'Attack on Titan',
            name_japanese: '進撃の巨人'
        },
        {
            id: '688a0fd99a566ea0f548a641',
            item_type: 1,
            url: 'https://myanimelist.net/anime/1535/Death_Note',
            img: '/preview/f9e62e1b8c888dba9e9ebb5f5b28a16e.jpg',
            parent: undefined,
            name: 'Death Note',
            name_english: 'Death Note',
            name_japanese: 'デスノート'
        },
        {
            id: '688a0fdc9a566ea0f548a899',
            item_type: 1,
            url: 'https://myanimelist.net/anime/1735/Naruto__Shippuuden',
            img: '/preview/8b43f48ea52c9c37521af242e217bb46.jpg',
            parent: undefined,
            name: 'Naruto: Shippuuden',
            name_english: 'Naruto Shippuden',
            name_japanese: '-ナルト- 疾風伝'
        },
        {
            id: '688a0fda9a566ea0f548a73f',
            item_type: 1,
            url: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch',
            img: '/preview/4949c3515e4c24be765223c107dd10e5.jpg',
            parent: undefined,
            name: 'Code Geass: Hangyaku no Lelouch',
            name_english: 'Code Geass: Lelouch of the Rebellion',
            name_japanese: 'コードギアス 反逆のルルーシュ'
        },
        {
            id: '688a0fbc9a566ea0f54891ba',
            item_type: 1,
            url: 'https://myanimelist.net/anime/30/Shinseiki_Evangelion',
            img: '/preview/738995b7d48e2b873c9ad4412ceacae2.jpg',
            parent: undefined,
            name: 'Shinseiki Evangelion',
            name_english: 'Neon Genesis Evangelion',
            name_japanese: '新世紀エヴァンゲリオン'
        },
        {
            id: '688a10299a566ea0f548ea0d',
            item_type: 1,
            url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
            img: '/preview/0f3ce223b301e798e3a1a55a7381dc88.jpg',
            parent: undefined,
            name: 'Jujutsu Kaisen',
            name_english: 'Jujutsu Kaisen',
            name_japanese: '呪術廻戦'
        },
        {
            id: '688a10159a566ea0f548d705',
            item_type: 1,
            url: 'https://myanimelist.net/anime/32281/Kimi_no_Na_wa',
            img: '/preview/d4a0fbe65babaef5f62f5d2398b9cf3b.jpg',
            parent: undefined,
            name: 'Kimi no Na wa.',
            name_english: 'Your Name.',
            name_japanese: '君の名は。'
        },
        {
            id: '688a10239a566ea0f548e3be',
            item_type: 1,
            url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
            img: '/preview/f9bb7695111e381dfae0e5b56ea929b3.jpg',
            parent: undefined,
            name: 'Kimetsu no Yaiba',
            name_english: 'Demon Slayer: Kimetsu no Yaiba',
            name_japanese: '鬼滅の刃'
        }
    ];

    const MAL_TOP_CHARA: FlatDocument[] = [
        {
            id: '688a0fda9a566ea0f548a768',
            item_type: 2,
            url: 'https://myanimelist.net/character/417/Lelouch_Lamperouge',
            img: '/preview/d49ce4bdddebb6e1360ae8e8d95c036f.jpg',
            parent: {
                id: '688a0fda9a566ea0f548a73f',
                name: 'Code Geass: Hangyaku no Lelouch',
                name_japanese: 'コードギアス 反逆のルルーシュ'
            },
            name: 'Lelouch Lamperouge',
            name_english: undefined,
            name_japanese: 'ルルーシュ・ランペルージ'
        },
        {
            id: '688a0fbb9a566ea0f54890e0',
            item_type: 2,
            url: 'https://myanimelist.net/character/40/Luffy_Monkey_D',
            img: '/preview/f009c503b71d972bc3b547dac49597c8.jpg',
            parent: {
                id: '688a0fbb9a566ea0f5489085',
                name: 'One Piece',
                name_japanese: 'ONE PIECE'
            },
            name: 'Luffy Monkey D.',
            name_english: undefined,
            name_japanese: 'モンキー・D・ルフィ'
        },
        {
            id: '688a10079a566ea0f548c712',
            item_type: 2,
            url: 'https://myanimelist.net/character/45627/Levi',
            img: '/preview/42f8126a53dcfc822e81b60181e4fb59.jpg',
            parent: {
                id: '/preview/688a10069a566ea0f548c6e8',
                name: 'Shingeki no Kyojin',
                name_japanese: '進撃の巨人'
            },
            name: 'Levi',
            name_english: undefined,
            name_japanese: 'リヴァイ'
        },
        {
            id: '688a0fd99a566ea0f548a6a0',
            item_type: 2,
            url: 'https://myanimelist.net/character/71/L_Lawliet',
            img: '/preview/3447bfa13a6b92e8da6f03aaedc1d455.jpg',
            parent: {
                id: '688a0fd99a566ea0f548a641',
                name: 'Death Note',
                name_japanese: 'デスノート'
            },
            name: 'L Lawliet',
            name_english: undefined,
            name_japanese: 'エル ローライト'
        },
        {
            id: '688a0fbb9a566ea0f54890e3',
            item_type: 2,
            url: 'https://myanimelist.net/character/62/Zoro_Roronoa',
            img: '/preview/03a700173f4b5ba90d283a41787efb1c.jpg',
            parent: {
                id: '688a0fbb9a566ea0f5489085',
                name: 'One Piece',
                name_japanese: 'ONE PIECE'
            },
            name: 'Zoro Roronoa',
            name_english: undefined,
            name_japanese: 'ロロノア・ゾロ'
        },
        {
            id: '688a0fc29a566ea0f5489501',
            item_type: 2,
            url: 'https://myanimelist.net/character/27/Killua_Zoldyck',
            img: '/preview/cfc65623ff9654991d7f63d12c2aa2a5.jpg',
            parent: {
                id: '688a0fc29a566ea0f54894af',
                name: 'Hunter x Hunter',
                name_japanese: 'HUNTER×HUNTER（ハンター×ハンター）'
            },
            name: 'Killua Zoldyck',
            name_english: undefined,
            name_japanese: 'キルア・ゾルディック'
        },
        {
            id: '688a0fd99a566ea0f548a6a2',
            item_type: 2,
            url: 'https://myanimelist.net/character/80/Light_Yagami',
            img: '/preview/e07086cc89ba10e23993f5fcd149d409.jpg',
            parent: {
                id: '688a0fd99a566ea0f548a641',
                name: 'Death Note',
                name_japanese: 'デスノート'
            },
            name: 'Light Yagami',
            name_english: undefined,
            name_japanese: '夜神 月'
        },
        {
            id: '688a0ffa9a566ea0f548bca0',
            item_type: 2,
            url: 'https://myanimelist.net/character/35252/Rintarou_Okabe',
            img: '/preview/0b71627e740e1314c435e6b55531e912.jpg',
            parent: {
                id: '688a0ffa9a566ea0f548bc4a',
                name: 'Steins;Gate',
                name_japanese: 'STEINS;GATE'
            },
            name: 'Rintarou Okabe',
            name_english: undefined,
            name_japanese: '岡部 倫太郎'
        },
        {
            id: '688a0fc29a566ea0f5489474',
            item_type: 2,
            url: 'https://myanimelist.net/character/11/Edward_Elric',
            img: '/preview/d9b1d4d30d26398001b59c163ae03f3b.jpg',
            parent: {
                id: '688a0fc29a566ea0f548941d',
                name: 'Fullmetal Alchemist',
                name_japanese: '鋼の錬金術師'
            },
            name: 'Edward Elric',
            name_english: undefined,
            name_japanese: 'エドワード・エルリック'
        },
        {
            id: '688a0fbb9a566ea0f5489089',
            item_type: 2,
            url: 'https://myanimelist.net/character/17/Naruto_Uzumaki',
            img: '/preview/1324f88ded1e81efaa077b9b9529f42f.jpg',
            parent: {
                id: '688a0fba9a566ea0f5489084',
                name: 'Naruto',
                name_japanese: 'ナルト'
            },
            name: 'Naruto Uzumaki',
            name_english: undefined,
            name_japanese: 'うずまき ナルト'
        },
        {
            id: '688a0fbe9a566ea0f548923d',
            item_type: 2,
            url: 'https://myanimelist.net/character/422/Guts',
            img: '/preview/b8e37305a2609f6e982e148536de1c07.jpg',
            parent: {
                id: '688a0fbc9a566ea0f548922e',
                name: 'Kenpuu Denki Berserk',
                name_japanese: '剣風伝奇ベルセルク'
            },
            name: 'Guts',
            name_english: undefined,
            name_japanese: 'ガッツ'
        },
        {
            id: '688a0fd29a566ea0f548a1e9',
            item_type: 2,
            url: 'https://myanimelist.net/character/672/Gintoki_Sakata',
            img: '/preview/b31599d810563763f8dcfd9f195f08d0.jpg',
            parent: {
                id: '688a0fd19a566ea0f548a1d3',
                name: 'Gintama',
                name_japanese: '銀魂'
            },
            name: 'Gintoki Sakata',
            name_english: undefined,
            name_japanese: '坂田 銀時'
        }
    ];

    let selectedUrl: string | null = $state(null);

    function openModal(url: string) {
        selectedUrl = url;
        getModal(DOCUMENT_MODAL_ID)?.showModal();
    }

    function closeModal() {
        selectedUrl = null;
        getModal(DOCUMENT_MODAL_ID)?.close();
    }
</script>

<TopDocuments
    name="My Top Animes"
    list={MY_TOP_ANI}
    onclickItem={openModal}
/>
<TopDocuments
    name="My Top Characters"
    list={MY_TOP_CHARA}
    onclickItem={openModal}
/>
<TopDocuments
    name="My Anime List Top Animes"
    list={MAL_TOP_ANI}
    onclickItem={openModal}
/>
<TopDocuments
    name="My Anime List Top Characters"
    list={MAL_TOP_CHARA}
    onclickItem={openModal}
/>
<DocumentModal
    url={selectedUrl}
    onclickClose={closeModal}
/>