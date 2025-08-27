<script lang="ts">
    import { Lang } from "$lib";
    import type { Parent } from "$lib/documents/anime-search/documents";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import ParentLabel from "$lib/components/ParentLabel.svelte";

    interface Doc {
        parent: Parent | undefined;
        unique: string | undefined;
    }

    interface Props {
        lang: Lang;
        doc: Doc;
    }

    let {lang, doc}: Props = $props();
</script>

<div class="card w-80 outline outline-cyan-500">
    <div class="card-body">
        <div class="mb-5">
            <ItemTypeBadge itemType={ItemType.YVideo}/>
        </div>
        <ParentLabel {lang} parent={doc.parent}/>    
    </div>
</div>
