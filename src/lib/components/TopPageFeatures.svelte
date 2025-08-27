<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents"
    import TopDocuments from "$lib/components/TopDocuments.svelte";
    import type { Lang } from "$lib";
    import WarnMsg from "./WarnMsg.svelte";
    import YVideoCard from "./YVideoCard.svelte";

    // const JUMP_ANIMES: FlatDocument[] = [
    //     // https://ja.wikipedia.org/wiki/Category:%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%97_%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1%E4%BD%9C%E5%93%81
    // ];

    // const JUMP_CHARACTERS: FlatDocument[] = [
        
    // ];

    // const KIRARA_ANIMES: FlatDocument[] = [
    //     // https://dic.nicovideo.jp/a/%E3%81%8D%E3%82%89%E3%82%89%E3%82%A2%E3%83%8B%E3%83%A1
    // ];

    // const KIRARA_CHARACTERS: FlatDocument[] = [
        
    // ];

    interface Props {
        lang: Lang;
    }

    let {lang}: Props = $props(); 
</script>

<div class="hero w-full my-20">
    <div class="hero-content">
        <WarnMsg msg="Kenja is under maintenance."/>
    </div>
</div>
<div class="hero w-full my-20">
    <div class="hero-content">
        <YVideoCard {lang} doc={{
            parent: {
                name: "name",
                name_japanese: "名前",
                url: "some.doc"
            },
            unique: "MbLvluRyv2o" 
        }}/>
    </div>
</div>


<!-- <TopDocuments
    name="Jump Animes"
    list={JUMP_ANIMES}
    {lang}
/>
<TopDocuments
    name="Jump Characters"
    list={JUMP_CHARACTERS}
    {lang}
/>
<TopDocuments
    name="Kirara Animes"
    list={KIRARA_ANIMES}
    {lang}
/>
<TopDocuments
    name="Kirara Characters"
    list={KIRARA_CHARACTERS}
    {lang}
/> -->
