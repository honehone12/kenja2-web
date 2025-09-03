<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents"
    import TopDocuments from "$lib/components/TopDocuments.svelte";
    import type { Lang } from "$lib";
    import { onMount } from "svelte";
    import { KenjaIndexDb } from "$lib/client/indexdb";

    const JUMP_ANIMES: FlatDocument[] = [
        {
            id: "68ad631659f782ec1803af37",
            item_type: 1,
            img: "preview/anime/7739c8679e643edbaf07a81a8202f25a.jpg",
            src: "https://myanimelist.net/anime/223/Dragon_Ball",
            name: "Dragon Ball",
            name_english: "Dragon Ball",
            name_japanese: "ドラゴンボール"
        },
        {
            id: "68ad631359f782ec1803a874",
            item_type: 1,
            img: "preview/anime/4b44981922d668242a1b4c8e54531d0b.jpg",
            src: "https://myanimelist.net/anime/21/One_Piece",
            name: "One Piece",
            name_english: "One Piece",
            name_japanese: "ONE PIECE"
        },
        {
            id: "68ad631559f782ec1803acf1",
            item_type: 1,
            img: "preview/anime/305d90f258aea2a8d142ad47c26c3734.jpg",
            src: "https://myanimelist.net/anime/136/Hunter_x_Hunter",
            name: "Hunter x Hunter",
            name_english: "Hunter x Hunter",
            name_japanese: "HUNTER×HUNTER（ハンター×ハンター）"
        },
        {
            id: "68ad631359f782ec1803a814",
            item_type: 1,
            img: "preview/anime/c64ef15dc5501512e7340c6a9033a254.jpg",
            src: "https://myanimelist.net/anime/20/Naruto",
            name: "Naruto",
            name_english: "Naruto",
            name_japanese: "ナルト",
        },
        {
            id: "68afc67779d87884b8050e87",
            item_type: 1,
            img: "preview/anime/00f04b68290dd81e9f1cafe468d3199f.jpg",
            src: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba",
            name: "Kimetsu no Yaiba",
            name_english: "Demon Slayer: Kimetsu no Yaiba",
            name_japanese: "鬼滅の刃"
        },
        {
            id: "68ad634559f782ec18040395",
            item_type: 1,
            img: "preview/anime/cc50f133ee7bb0939e0ed98cd852b895.jpg",
            src: "https://myanimelist.net/anime/40748/Jujutsu_Kaisen",
            name: "Jujutsu Kaisen",
            name_english: "Jujutsu Kaisen",
            name_japanese: "呪術廻戦"
        },
        {
            id: "68ad634a59f782ec18040cce",
            item_type: 1,
            img: "preview/anime/f41c791d00403ecfc2cfc0dc54304aba.jpg",
            src: "https://myanimelist.net/anime/50265/Spy_x_Family",
            name: "Spy x Family",
            name_japanese: "SPY×FAMILY"
        },
        {
            id: "68ad631659f782ec1803ae37",
            item_type: 1,
            img: "preview/anime/7a08eeab51c1b2ba81f6f31b7b7fce01.jpg",
            src: "https://myanimelist.net/anime/170/Slam_Dunk",
            name: "Slam Dunk",
            name_english: "Slam Dunk",
            name_japanese: "スラムダンク"
        },
        {
            id: "68ad631f59f782ec1803bf2e",
            item_type: 1,
            img: "preview/anime/b609c982c1e87724fa209b2dc287ad48.jpg",
            src: "https://myanimelist.net/anime/1535/Death_Note",
            name: "Death Note",
            name_english: "Death Note",
            name_japanese: "デスノート"
        }
    ];

    const KIRARA_ANIMES: FlatDocument[] = [
        {    
            id: "68ad632859f782ec1803ce6f",
            item_type: 1,
            img: "preview/anime/1fe7e73377d433243bee0d36c55311a1.jpg",
            src: "https://myanimelist.net/anime/5680/K-On",
            name: "K-On!",
            name_english: "K-ON!",
            name_japanese: "けいおん!"
        },
        {
            id: "68ad633459f782ec1803e3d4",
            item_type: 1,
            img: "preview/anime/7d2cb2d64a8634348efed0ff8d110951.jpg",
            src: "https://myanimelist.net/anime/21273/Gochuumon_wa_Usagi_desu_ka",
            name: "Gochuumon wa Usagi desu ka?",
            name_english: "Is the Order a Rabbit?",
            name_japanese: "ご注文はうさぎですか？"
        },
        {
            id: "68ad633759f782ec1803e79d",
            item_type: 1,
            img: "preview/anime/63e876f12cf617db15af1bfc8f520011.jpg",
            src: "https://myanimelist.net/anime/24765/Gakkougurashi",
            name: "Gakkougurashi!",
            name_english: "School-Live!",
            name_japanese: "がっこうぐらし！"
        },
        {
            id: "68ad633e59f782ec1803f613",
            item_type: 1,
            img: "preview/anime/1b7f8df1cea7af71acad9ba2693b2ca0.jpg",
            src: "https://myanimelist.net/anime/34798/Yuru_Camp△",
            name: "Yuru Camp△",
            name_english: "Laid-Back Camp",
            name_japanese:"ゆるキャン△"
        },
        {
            id: "68ad634359f782ec1803ffe1",
            item_type: 1,
            img: "preview/anime/7781b34d56520e349406d7298d244b5e.jpg",
            src: "https://myanimelist.net/anime/39071/Machikado_Mazoku",
            name: "Machikado Mazoku",
            name_english: "The Demon Girl Next Door",
            name_japanese: "まちカドまぞく"
        },
        {
            id: "68ad634959f782ec18040988",
            item_type: 1,
            img: "preview/anime/d7fc87fa5cc30e07b845f64406aac48b.jpg",
            src: "https://myanimelist.net/anime/47917/Bocchi_the_Rock",
            name: "Bocchi the Rock!",
            name_english: "Bocchi the Rock!",
            name_japanese: "ぼっち・ざ・ろっく！"
        }
    ];

    const MAGAZINE_ANIMES: FlatDocument[] = [
        {
            id: "68ad633259f782ec1803df49",
            item_type: 1,
            img: "preview/anime/492d7fba075a40545162286fc69103b4.jpg",
            src: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
            name: "Shingeki no Kyojin",
            name_english: "Attack on Titan",
            name_japanese: "進撃の巨人"
        },
        {
            id: "68ad632959f782ec1803d09c",
            item_type: 1,
            img: "preview/anime/177b48215487b5b6e1d582ca86fcfd66.jpg",
            src: "https://myanimelist.net/anime/6702/Fairy_Tail",
            name: "Fairy Tail",
            name_english: "Fairy Tail",
            name_japanese: "FAIRY TAIL（フェアリーテイル）"
        },
        {
            id: "68ad634259f782ec1803fdab",
            item_type: 1,
            img: "preview/anime/37861a80c93f02860860c46aadf237d9.jpg",
            src: "https://myanimelist.net/anime/38101/5-toubun_no_Hanayome",
            name: "5-toubun no Hanayome",
            name_english: "The Quintessential Quintuplets",
            name_japanese: "五等分の花嫁"
        },
        {
            id: "68ad633659f782ec1803e6ce",
            item_type: 1,
            img: "preview/anime/2b11e1de920384569b4136fb9fa4ea35.jpg",
            src: "https://myanimelist.net/anime/23755/Nanatsu_no_Taizai",
            name: "Nanatsu no Taizai",
            name_english: "The Seven Deadly Sins",
            name_japanese: "七つの大罪"
        },
        {
            id: "68ad631559f782ec1803adbb",
            item_type: 1,
            img: "preview/anime/1b5e3c5424830f5b00029ca9efc9003a.jpg",
            src: "https://myanimelist.net/anime/157/Mahou_Sensei_Negima",
            name: "Mahou Sensei Negima!",
            name_english: "Negima!",
            name_japanese: "魔法先生 ネギま！"
        },
        {
            id: "68ad633659f782ec1803e62e",    
            item_type: 1,
            img: "preview/anime/d787884139d270162c62c9a82e1f6ed7.jpg",
            src: "https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso",
            name: "Shigatsu wa Kimi no Uso",
            name_english: "Your Lie in April",
            name_japanese: "四月は君の嘘"
        },
        {
            id: "68ad633859f782ec1803ea79",
            item_type: 1,
            img: "preview/anime/7abf8d6777d13f610632b8f719839122.jpg",
            src: "https://myanimelist.net/anime/28851/Koe_no_Katachi",
            name: "Koe no Katachi",
            name_english: "A Silent Voice",
            name_japanese: "聲の形"
        },
        {
            id: "68ad634059f782ec1803fb2d",
            item_type: 1,
            img: "preview/anime/2dfbedcd65f8ae572075007f8b658866.jpg",
            src: "https://myanimelist.net/anime/37403/Ahiru_no_Sora",
            name: "Ahiru no Sora",
            name_japanese: "あひるの空"
        },
        {
            id: "68ad631359f782ec1803a991",
            item_type: 1,
            img: "preview/anime/4b9922eef574a830dc925f7c572764ec.jpg",
            src: "https://myanimelist.net/anime/24/School_Rumble",
            name: "School Rumble",
            name_english: "School Rumble",
            name_japanese: "スクールランブル"
        }
    ];
    
    const OTHER_ANIMES: FlatDocument[] = [
        {
            id: "68afc67779d87884b80509b9",
            item_type: 1,
            img: "preview/anime/d6155cec276542cac97fb7055af0f872.jpg",
            src: "https://myanimelist.net/anime/34599/Made_in_Abyss",
            name: "Made in Abyss",
            name_english: "Made in Abyss",
            name_japanese: "メイドインアビス"
        }
    ];

    interface Props {
        lang: Lang;
    }

    let {lang}: Props = $props();
    let indexdb: KenjaIndexDb | null = $state(null);
	let myList: string[] = $state([]);

    async function onStar(id: string, star: boolean, list: FlatDocument[]) {
        if (!indexdb) {
            console.warn('index db is not initialized yet.');
            return;
        }

        try {
            if (star) {
                const doc = list.find((value) => value.id === id);
                if (doc && !myList.includes(id)) {
                    await indexdb.addMyList(doc);
                }
            } else {
                if (myList.includes(id)) {
                    await indexdb.deleteMyList(id);
                }
            }
            
            myList = await indexdb.getMyListKeys();    
        } catch (e) {
            console.error(e);
        }
    }

	onMount(async () => {
        try {
			indexdb = await KenjaIndexDb.open();
			myList = await indexdb.getMyListKeys();
		} catch (e) {
            console.error(e);
        }
    });
</script>

<TopDocuments
    {lang}
    name="Jump Animes"
    nameJapanese="ジャンプアニメ"
    list={JUMP_ANIMES}
    {myList}
    onStar={(id, star) => onStar(id, star, JUMP_ANIMES)}
/>
<TopDocuments
    {lang}
    name="Kirara Animes"
    nameJapanese="きららアニメ"
    list={KIRARA_ANIMES}
    {myList}
    onStar={(id, star) => onStar(id, star, KIRARA_ANIMES)}
/>
<TopDocuments
    {lang}
    name="Magazine Animes"
    nameJapanese="マガジンアニメ"
    list={MAGAZINE_ANIMES}
    {myList}
    onStar={(id, star) => onStar(id, star, MAGAZINE_ANIMES)}
/>
<TopDocuments
    {lang}
    name="Other Animes"
    nameJapanese="その他アニメ"
    list={OTHER_ANIMES}
    {myList}
    onStar={(id, star) => onStar(id, star, OTHER_ANIMES)}
/>
