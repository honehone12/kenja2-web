<script lang="ts">
    import { Lang } from "$lib";
    import type { Parent } from "$lib/documents/anime-search/documents";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import ParentLabel from "$lib/components/ParentLabel.svelte";
    
    interface Props {
        lang: Lang;
        parent: Parent | undefined;
        unique: string | undefined;
    }

    let {lang, parent, unique}: Props = $props();
</script>

<div class="card w-80 outline outline-cyan-500">
    <div class="card-body">
        <div class="mb-5">
            <ItemTypeBadge itemType={ItemType.YVideo}/>
        </div>
        <ParentLabel {lang} parent={parent}/>
        <iframe  
            src="https://www.youtube-nocookie.com/embed/{unique}" 
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
            class="my-5"
        ></iframe>    
    </div>
</div>
