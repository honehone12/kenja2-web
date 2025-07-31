<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents"
    import {getModal, DOCUMENT_MODAL_ID} from "$lib";
    import DocumentModal from "$lib/components/DocumentModal.svelte";
    import CandidateCard from "$lib/components/CandidateCard.svelte";

    const IMG_ROOT = 'http://localhost:8080';

    const MY_TOP_5: FlatDocument[] = [
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
        }
    ];
    MY_TOP_5.forEach((value) => value.img = `${IMG_ROOT}${value.img}`);

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
    <div class="hero-content card border border-neutral-500 text-center w-80 px-10 py-5 mb-10">
        <h2 class="text-xl">My Top 5 Anime</h2>
    </div>
</div>
<div class="hero w-full">
    <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
        
        {#each MY_TOP_5 as doc}
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