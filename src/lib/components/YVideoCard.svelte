<script lang="ts">
    import { Lang } from "$lib";
    import type { Parent } from "$lib/documents/anime-search/documents";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import DocNameLabel from "$lib/components/DocNameLabel.svelte";

    interface Props {
        lang: Lang;
        docParent: Parent | undefined;
        unique: string | undefined;
    }

    let {lang, docParent, unique}: Props = $props();
</script>

{#if unique && docParent}
    <div class="card w-80 outline outline-cyan-500">
        <div class="card-body">
            <div class="mb-5">
                <ItemTypeBadge itemType={ItemType.YVideo}/>
            </div>
            <span class="mb-2">
                <DocNameLabel 
                    {lang} 
                    name={docParent.name} 
                    nameJapanese={docParent.name_japanese}
                />
            </span>
            <iframe  
                src="https://www.youtube-nocookie.com/embed/{unique}" 
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                class="outline outline-cyan-500 outline rounded-md my-2"
            ></iframe>
        </div>
    </div>    
{/if}
