<script lang="ts">
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import ManualDocuments from "$lib/components/ManualDocuments.svelte";
    import type { Lang } from "$lib";

    interface Docs {
        name: string;
        nameJapanese: string;
        list: FlatDocument[];
    }

    interface Props {
        lang: Lang;
        bundle: Docs[];
    }

    let { lang, bundle }: Props = $props();
</script>

{#each bundle as docs, i (i)}
    <div class="pt-10">
        <ManualDocuments
            {lang}
            name={docs.name}
            nameJapanese={docs.nameJapanese}
            documents={docs.list}
        />
    </div>
{/each}
