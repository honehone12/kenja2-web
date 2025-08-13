<script lang="ts">
    import { 
        openAgeModal, 
        openDocumentModal, 
        closeDocumentModal 
    } from "$lib/client/modal";
    import AgeModal from "$lib/components/AgeModal.svelte";
    import DocumentModal from "$lib/components/DocumentModal.svelte";
    import TopDocuments from "$lib/components/TopDocuments.svelte";
    import type { FlatDocument } from "$lib/documents/anime-search/documents.js";
    import { onMount } from "svelte";

    let {data} = $props();

    onMount(() => {
        if (data.needAgeVerification) {
            openAgeModal();
        }
    });

    const MAL_POPULAR: FlatDocument[] = [
        {
            id: '68941659d978bd40468240f8',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/1639/Boku_no_Pico',
            img: '/preview/d8f023d85a2f337408522eebe564daca.jpg',
            parent: undefined,
            name: 'Boku no Pico',
            name_english: undefined,
            name_japanese: 'ぼくのぴこ'
        },
        {
            id: '68941669d978bd4046824cff',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/40746/Overflow',
            img: '/preview/d2dd790fd352123271ac264a4a4d689a.jpg',
            parent: undefined,
            name: 'Overflow',
            name_english: 'Overflow',
            name_japanese: 'おーばーふろぉ'
        },
        {
            id: '68941661d978bd4046824795',
            item_type: 1,
            rating: 2,
            parent: undefined,
            url: 'https://myanimelist.net/anime/10851/Euphoria',
            img: '/preview/b7cbc99306b5746b4c3c93157c9637b1.jpg',
            name: 'Euphoria',
            name_english: undefined,
            name_japanese: 'euphoria'
        },
        {
            id: '68941658d978bd404682405c',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/320/A_Kite',
            img: '/preview/80fab0c6091e4ea09505d76d76a9d561.jpg',
            parent: undefined,
            name: 'A Kite',
            name_english: 'Kite',
            name_japanese: 'A KITE（カイト）'
        },
        {
            id: '68941663d978bd40468249c6',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/22429/Itadaki_Seieki♥',
            img: '/preview/8f0f8fedd486dcaf3d7649877dba3788.jpg',
            parent: undefined,
            name: 'Itadaki! Seieki♥',
            name_english: 'Vampire Vixen',
            name_japanese: 'いただきっ! セーエキ♥'
        },
        {
            id: '68941658d978bd404682405d',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/368/Bible_Black',
            img: '/preview/503a9780f7d912f1b8a6bba70283b23f.jpg',
            parent: undefined,
            name: 'Bible Black',
            name_english: 'Bible Black',
            name_japanese: 'バイブルブラック'
        },
        {
            id: '68941661d978bd4046824792',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/10779/Eroge_H_mo_Game_mo_Kaihatsu_Zanmai',
            img: '/preview/6e7f03feca6a81b353db29cd7c167061.jpg',
            parent: undefined,
            name: 'Eroge! H mo Game mo Kaihatsu Zanmai',
            name_english: undefined,
            name_japanese: 'えろげー! ～Hもゲームも開発三昧～'
        },
        {
            id: '68941667d978bd4046824bc4',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/36198/Omiai_Aite_wa_Oshiego_Tsuyoki_na_Mondaiji',
            img: '/preview/7d4261fedaf75eba7300bc8d41890fe6.jpg',
            parent: undefined,
            name: 'Omiai Aite wa Oshiego, Tsuyoki na, Mondaiji.',
            name_english: 'My Matchmaking Partner Is My Student, An Aggressive Troublemaker',
            name_japanese: 'お見合い相手は教え子、強気な、問題児。'
        },
        {
            id: '68941660d978bd4046824651',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/6893/Oni_Chichi',
            img: '/preview/80a44ba704c1f3aa0562f5f941ff6c46.jpg',
            parent: undefined,
            name: 'Oni Chichi',
            name_english: 'Demon Father',
            name_japanese: '鬼父'
        },
        {
            id: '68941667d978bd4046824c43',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/37281/Joshiochi_2-kai_kara_Onnanoko_ga_Futtekita',
            img: '/preview/e6ab4aee32c2c11c9690d414822c6dcc.jpg',
            parent: undefined,
            name: 'Joshiochi! 2-kai kara Onnanoko ga... Futtekita!?',
            name_english: 'What She Fell on Was the Tip of My Dick',
            name_japanese: 'じょしおちっ！～2階から女の子が…降ってきた！？～'
        },
        {
            id: '68941664d978bd4046824a69',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/29575/Mankitsu_Happening',
            img: '/preview/383840028a2ebf9e6c61bcf5d6ed2241.jpg',
            parent: undefined,
            name: 'Mankitsu Happening',
            name_english: undefined,
            name_japanese: '漫喫ハプニング'
        },
        {
            id: '68941660d978bd404682466e',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/7748/Sono_Hanabira_ni_Kuchizuke_wo__Anata_to_Koibito_Tsunagi',
            img: '/preview/11beb092470ac0b045cdb501a557c7e7.jpg',
            parent: undefined,
            name: 'Sono Hanabira ni Kuchizuke wo: Anata to Koibito Tsunagi',
            name_english: 'A Kiss for the Petals: Becoming Your Lover',
            name_japanese: 'その花びらにくちづけを　あなたと恋人つなぎ'
        },
        {
            id: '68941666d978bd4046824bb2',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/35629/Skirt_no_Naka_wa_Kedamono_deshita',
            img: '/preview/c9331d670b14275d770bcfdceee43d9c.jpg',
            parent: undefined,
            name: 'Skirt no Naka wa Kedamono deshita.',
            name_english: 'A Predator in a Skirt',
            name_japanese: 'スカートの中はケダモノでした。'
        },
        {
            id: '68941660d978bd4046824661',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/7411/Kanojo_x_Kanojo_x_Kanojo__Sanshimai_to_no_Dokidoki_Kyoudou_Seikatsu',
            img: '/preview/a416385f75fad9275d38a49382422da7.jpg',
            parent: undefined,
            name: 'Kanojo x Kanojo x Kanojo: Sanshimai to no Dokidoki Kyoudou Seikatsu',
            name_english: 'Kanojo x Kanojo x Kanojo',
            name_japanese: '彼女×彼女×彼女～三姉妹とのドキドキ共同生活～'
        },
        {
            id: '68941668d978bd4046824cdc',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/39337/Araiya-san__Ore_to_Aitsu_ga_Onnayu_de',
            img: '/preview/60c80e4ac4134848f4082b6a2078397f.jpg',
            parent: undefined,
            name: 'Araiya-san!: Ore to Aitsu ga Onnayu de!?',
            name_english: "Backwasher! Her and I, in the Women's Bath!?",
            name_japanese: '洗い屋さん! ~俺とアイツが女湯で!?~'
        },
        {
            id: '68941669d978bd4046824d9a',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/47591/Kuro_Gal_ni_Natta_kara_Shinyuu_to_shitemita',
            img: '/preview/6e917619dfe6b03e67954532c77df84e.jpg',
            parent: undefined,
            name: 'Kuro Gal ni Natta kara Shinyuu to shitemita.',
            name_english: 'Seduced by My Best Friend',
            name_japanese: '黒ギャルになったから親友としてみた。'
        },
        {
            id: '68941659d978bd4046824062',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/741/Sensitive_Pornograph',
            img: '/preview/d2f87b85c0f1476619d20fc15d4e12b7.jpg',
            parent: undefined,
            name: 'Sensitive Pornograph',
            name_english: undefined,
            name_japanese: 'センシティブ・ポルノグラフ'
        },
        {
            id: '68941665d978bd4046824b9f',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/34823/Souryo_to_Majiwaru_Shikiyoku_no_Yoru_ni',
            img: '/preview/8529c68185f75c1fe4f1d3d96e79a96f.jpg',
            parent: undefined,
            name: 'Souryo to Majiwaru Shikiyoku no Yoru ni...',
            name_english: 'On a Lustful Night Mingling with a Priest',
            name_japanese: '僧侶と交わる色欲の夜に…'
        }
    ];

    const MAL_TOP: FlatDocument[] = [
        {
            id: '68941669d978bd4046824e0e',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/48755/Imaizumin_Chi_wa_Douyara_Gal_no_Tamariba_ni_Natteru_Rashii',
            img: '/preview/31841340970d22c512ff4d00548e673b.jpg',
            parent: undefined,
            name: 'Imaizumin Chi wa Douyara Gal no Tamariba ni Natteru Rashii',
            name_english: 'Imaizumi Brings All the Gyarus to His House',
            name_japanese: '今泉ん家はどうやらギャルの溜まり場になってるらしい'
        },
        {
            id: '6894166ad978bd4046824e33',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/50634/Love_Me__Kaede_to_Suzu_The_Animation',
            img: '/preview/3482faaa9215d30cab62ae8030e1f1db.jpg',
            parent: undefined,
            name: 'Love Me: Kaede to Suzu The Animation',
            name_english: 'Love Me: Kaede and Suzu The Animation',
            name_japanese: 'らぶみー『楓と鈴』 THE ANIMATION'
        },
        {
            id: '68941668d978bd4046824cde',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/39392/Master_Piece_The_Animation',
            img: '/preview/6781779e850dd176e5414891800dd280.jpg',
            parent: undefined,
            name: 'Master Piece The Animation',
            name_english: undefined,
            name_japanese: 'マスターピース THE ANIMATION'
        },
        {
            id: '6894166bd978bd4046824ee2',
            item_type: 3,
            rating: 2,
            url: 'https://myanimelist.net/anime/56511/Hatsukoi_Jikan',
            img: '/preview/5ae673b8d87b32e30ab5266bbc76a5fb.jpg',
            parent: undefined,
            name: 'Hatsukoi Jikan',
            name_english: undefined,
            name_japanese: '初恋時間.'
        },
        {
            id: '68941669d978bd4046824d71',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/41261/Ane_wa_Yanmama_Junyuu-chuu',
            img: '/preview/de44691a1b1f21ec14a662f35e3c922a.jpg',
            parent: undefined,
            name: 'Ane wa Yanmama Junyuu-chuu',
            name_english: undefined,
            name_japanese: '義姉はヤンママ授乳中'
        },
        {
            id: '6894166bd978bd4046824ed8',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/55547/Kono_Koi_ni_Kizuite_The_Animation',
            img: '/preview/44ff297921af92740e163e9e736e711f.jpg',
            parent: undefined,
            name: 'Kono Koi ni Kizuite The Animation',
            name_english: 'Notice my Love! The Animation',
            name_japanese: 'この恋に気づいて THE ANIMATION'
        },
        {
            id: '68941664d978bd4046824a69',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/29575/Mankitsu_Happening',
            img: '/preview/383840028a2ebf9e6c61bcf5d6ed2241.jpg',
            parent: undefined,
            name: 'Mankitsu Happening',
            name_english: undefined,
            name_japanese: '漫喫ハプニング'
        },
        {
            id: '68941669d978bd4046824da0',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/48468/Uchi_no_Otouto_Maji_de_Dekain_Dakedo_Mi_ni_Konai',
            img: '/preview/8f9683a4f6e0495140f257afd7e81c81.jpg',
            parent: undefined,
            name: 'Uchi no Otouto Maji de Dekain Dakedo Mi ni Konai?',
            name_english: 'My Younger Brother is Really Big, Wanna Come See?',
            name_japanese: 'ウチの弟マジでデカイんだけど見にこない ?'
        },
        {
            id: '6894166ad978bd4046824e3e',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/51662/Seika_Jogakuin_Kounin_Sao_Ojisan',
            img: '/preview/b35be8458be5f02fb0441a5e03dec72b.jpg',
            parent: undefined,
            name: 'Seika Jogakuin Kounin Sao Ojisan',
            name_english: undefined,
            name_japanese: '聖華女学院公認竿おじさん'
        },
        {
            id: '6894166ad978bd4046824eb6',
            item_type: 3,
            rating: 2,
            url: 'https://myanimelist.net/anime/52617/Succubus_Yondara_Gibo_ga_Kita',
            img: '/preview/1b556ea640f8c71836d66de1496bbe79.jpg',
            parent: undefined,
            name: 'Succubus Yondara Gibo ga Kita!?',
            name_english: undefined,
            name_japanese: 'サキュバス喚んだら義母が来た!?'
        },
        {
            id: '68941667d978bd4046824c31',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/36720/Youkoso_Sukebe_Elf_no_Mori_e',
            img: '/preview/b87b8fccd6171d39f0623c2b3b9ebdd4.jpg',
            parent: undefined,
            name: 'Youkoso! Sukebe Elf no Mori e',
            name_english: undefined,
            name_japanese: 'OVAようこそ！スケベエルフの森へ'
        },
        {
            id: '6894166ad978bd4046824e31',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/50488/Garden__Takamine-ke_no_Nirinka_-_The_Animation',
            img: '/preview/0705b9cc635f4a269647e99b254d9cb0.jpg',
            parent: undefined,
            name: 'Garden: Takamine-ke no Nirinka - The Animation',
            name_english: undefined,
            name_japanese: 'Garden ~高嶺家の二輪花~ THE ANIMATION'
        },
        {
            id: '6894166bd978bd4046824f74',
            item_type: 3,
            rating: 2,
            url: 'https://myanimelist.net/anime/59328/Incha_Couple_ga_You_Gal-tachi_to_Sex_Training_Suru_Hanashi',
            img: '/preview/91305ec96b58eb282ff427235cd31a63.jpg',
            parent: undefined,
            name: 'Incha Couple ga You Gal-tachi to Sex Training Suru Hanashi',
            name_english: undefined,
            name_japanese: '陰キャカップルが陽ギャル達とSEXトレーニングする話'
        },
        {
            id: '68941664d978bd40468249e6',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/25345/Rance_01__Hikari_wo_Motomete_The_Animation',
            img: '/preview/7c01179f5c737cbb6d56555e602765e0.jpg',
            parent: undefined,
            name: 'Rance 01: Hikari wo Motomete The Animation',
            name_english: undefined,
            name_japanese: 'ランス01 光をもとめて THE ANIMATION'
        },
        {
            id: '6894166bd978bd4046824f76',
            item_type: 3,
            rating: 2,
            url: 'https://myanimelist.net/anime/59407/Iribitari_Gal_ni_Ma〇ko_Tsukawasete_Morau_Hanashi',
            img: '/preview/a0ba09284a73d06b8d91b6c0bcd0ed14.jpg',
            parent: undefined,
            name: 'Iribitari Gal ni Ma〇ko Tsukawasete Morau Hanashi',
            name_english: undefined,
            name_japanese: '入り浸りギャルにま〇こ使わせて貰う話'
        },
        {
            id: '68941663d978bd404682495b',
            item_type: 1,
            rating: 2,
            url: 'https://myanimelist.net/anime/22069/Swing_Out_Sisters_2014',
            img: '/preview/b6793e450a1a516974b659db1ac6c8c5.jpg',
            parent: undefined,
            name: 'Swing Out Sisters (2014)',
            name_english: undefined,
            name_japanese: 'Swing Out Sisters'
        },
        {
            id: '6894166bd978bd4046824f8e',
            item_type: 3,
            rating: 2,
            url: 'https://myanimelist.net/anime/60993/Motokare_to_wa_Dekinakatta_Sex_Shitemo_Ii_desu_ka',
            img: '/preview/4fffd21d3c0b8159c0d3826db2631540.jpg',
            parent: undefined,
            name: 'Motokare to wa Dekinakatta Sex Shitemo Ii desu ka?',
            name_english: undefined,
            name_japanese: '元カレとはできなかったセックスしてもいいですか?'
        },
        {
            id: '6894166bd978bd4046824f08',
            item_type: 3,
            rating: 2,
            url: 'https://myanimelist.net/anime/58892/Bubble_de_House_de__The_Animation',
            img: '/preview/b3627c979ad235b0e5b8fa2f9f3ba3f3.jpg',
            parent: undefined,
            name: 'Bubble de House de *** The Animation',
            name_english: undefined,
            name_japanese: 'バブルdeハウスde○○○ THE ANIMATION'
        }
    ];

    let selectedUrl: string | null = $state(null);

    function openModal(url: string) {
        selectedUrl = url;
        openDocumentModal();
    }

    function closeModal() {
        selectedUrl = null;
        closeDocumentModal();
    }
</script>

<svelte:head>
	<title>Anime Kenja - Kenja Mode</title>
	<meta
		name="description"
		content="Anime Kenja is a anime and character search engine. Find kenja anime here."
	/>
</svelte:head>

<AgeModal ref="/kenja"/>
<div class="py-20">
    <TopDocuments
        name="My Anine List Popular Animes"
        list={MAL_POPULAR}
        useBlur={data.needAgeVerification}
        onclickItem={openModal}
    />
    <TopDocuments
        name="My Anine List Top Animes"
        list={MAL_TOP}
        useBlur={data.needAgeVerification}
        onclickItem={openModal}
    />
</div>
<DocumentModal
    url={selectedUrl}
    onclickClose={closeModal}
/>
