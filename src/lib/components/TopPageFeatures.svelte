<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents"
    import TopDocuments from "$lib/components/TopDocuments.svelte";
    import type { Lang } from "$lib";

    // https://ja.wikipedia.org/wiki/Category:%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%97_%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1%E4%BD%9C%E5%93%81
    const JUMP_ANIMES: FlatDocument[] = [
        
    ];

    const JUMP_CHARACTERS: FlatDocument[] = [
        
    ];

    // https://dic.nicovideo.jp/a/%E3%81%8D%E3%82%89%E3%82%89%E3%82%A2%E3%83%8B%E3%83%A1
    const KIRARA_ANIMES: FlatDocument[] = [
        
    ];

    const KIRARA_CHARACTERS: FlatDocument[] = [
        
    ];

    interface Props {
        lang: Lang;
    }

    let {lang}: Props = $props(); 
</script>

<TopDocuments
    name="My Top Animes"
    list={JUMP_ANIMES}
    {lang}
/>
<TopDocuments
    name="My Top Characters"
    list={JUMP_CHARACTERS}
    {lang}
/>
<TopDocuments
    name="My Anime List Top Animes"
    list={KIRARA_ANIMES}
    {lang}
/>
<TopDocuments
    name="My Anime List Top Characters"
    list={KIRARA_CHARACTERS}
    {lang}
/>
