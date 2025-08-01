<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents"
    import {getModal, DOCUMENT_MODAL_ID} from "$lib";
    import DocumentModal from "$lib/components/DocumentModal.svelte";
    import CandidateCard from "$lib/components/CandidateCard.svelte";
    import {PUBLIC_LOCAL_IMG_ROOT} from "$env/static/public";

    const MY_TOP_10_ANI: FlatDocument[] = [
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
            id: '688a101f9a566ea0f548e031',
            item_type: 1,
            url: 'https://myanimelist.net/anime/36516/Beatless',
            img: '/preview/4c40a52b800ded46c7662fcecd8a118d.jpg',
            parent: undefined,
            name: 'Beatless',
            name_english: 'Beatless',
            name_japanese: 'BEATLESS'
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
            id: '688a10109a566ea0f548d1ea',
            item_type: 1,
            url: 'https://myanimelist.net/anime/28999/Charlotte',
            img: '/preview/58c52b9a5eecf74df00062e82eb1d50c.jpg',
            parent: undefined,
            name: 'Charlotte',
            name_english: 'Charlotte',
            name_japanese: 'Charlotte（シャーロット）'
        },
        {
            id: '688a0fc39a566ea0f54895ab',
            item_type: 1,
            url: 'https://myanimelist.net/anime/164/Mononoke_Hime',
            img: '/preview/e19e552add85122ace957d4da5062fb5.jpg',
            parent: undefined,
            name: 'Mononoke Hime',
            name_english: 'Princess Mononoke',
            name_japanese: 'もののけ姫'
        }
    ];
    const MAL_TOP_10_ANI: FlatDocument[] = [
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
        }
    ];

    if (PUBLIC_LOCAL_IMG_ROOT) {
        MY_TOP_10_ANI.forEach((value) => value.img = PUBLIC_LOCAL_IMG_ROOT + value.img);
        MAL_TOP_10_ANI.forEach((value) => value.img = PUBLIC_LOCAL_IMG_ROOT + value.img);
    }

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

<div class="hero w-full">
    <div class="hero-content card border border-neutral-500 text-center min-w-80 p-5 mb-10 mx-10">
        <h2 class="text-xl">My Top 10 Anime</h2>
    </div>
</div>
<div class="hero w-full">
    <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
        
        {#each MY_TOP_10_ANI as doc}
            <CandidateCard
                {doc}
                onclickItem={openModal}
            />
        {/each}
    </div>
    <DocumentModal
        url={selectedUrl}
        onclickClose={closeModal}
    />
</div>
<div class="hero w-full">
    <div class="hero-content card border border-neutral-500 min-w-80 text-center p-5 my-10">
        <h2 class="text-xl">My Anime List Top 10 Anime</h2>
    </div>
</div>
<div class="hero w-full">
    <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
        
        {#each MAL_TOP_10_ANI as doc}
            <CandidateCard
                {doc}
                onclickItem={openModal}
            />
        {/each}
    </div>
    <DocumentModal
        url={selectedUrl}
        onclickClose={closeModal}
    />
</div>