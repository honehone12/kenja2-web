<script lang="ts">
    import { Lang } from "$lib";
    import type { Parent } from "$lib/documents/anime-search/documents";

    interface Props {
        lang: Lang;
        docParent: Parent | undefined;
    }

    let {lang, docParent}: Props = $props();
</script>

{#if docParent}
    <a href="/textsearch/buffer?keyword={lang === Lang.Jp && docParent.name_japanese ? docParent.name_japanese : docParent.name}&item-type=all">
        <h3 class="link link-primary">
            {docParent.name}{docParent.name_japanese ? ` / ${docParent.name_japanese}`: ''}
        </h3>    
    </a>
{/if}
