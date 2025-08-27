<script lang="ts">
    import { Lang } from "$lib";
    import type { Parent } from "$lib/documents/anime-search/documents";

    interface Props {
        lang: Lang;
        parent: Parent | undefined;
    }

    let {lang, parent}: Props = $props();
</script>

{#if parent}
    <a href="/textsearch/buffer?keyword={lang === Lang.Jp && parent.name_japanese ? parent.name_japanese : parent.name}&item-type=all">
        <h3 class="link link-primary">
            {parent.name}{parent.name_japanese ? `/ ${parent.name_japanese}`: ''}
        </h3>    
    </a>
{/if}
