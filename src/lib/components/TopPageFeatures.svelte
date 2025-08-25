<script lang="ts">
    import type {FlatDocument} from "$lib/documents/anime-search/documents"
    import TopDocuments from "$lib/components/TopDocuments.svelte";
    import type { Lang } from "$lib";

    const MY_TOP_ANI: FlatDocument[] = [
        
    ];

    const MY_TOP_CHARA: FlatDocument[] = [
        
    ];

    const MAL_TOP_ANI: FlatDocument[] = [
        
    ];

    const MAL_TOP_CHARA: FlatDocument[] = [
        
    ];

    interface Props {
        lang: Lang;
    }

    let {lang}: Props = $props(); 
</script>

<TopDocuments
    name="My Top Animes"
    list={MY_TOP_ANI}
    {lang}
/>
<TopDocuments
    name="My Top Characters"
    list={MY_TOP_CHARA}
    {lang}
/>
<TopDocuments
    name="My Anime List Top Animes"
    list={MAL_TOP_ANI}
    {lang}
/>
<TopDocuments
    name="My Anime List Top Characters"
    list={MAL_TOP_CHARA}
    {lang}
/>
