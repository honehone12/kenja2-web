<script lang="ts">
    import { Lang } from "$lib";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import Documents from "./Documents.svelte";

    interface Props {
        lang: Lang;
        name: string;
        nameJapanese: string;
        documents: FlatDocument[];
    }

    let { lang, name, nameJapanese, documents }: Props = $props();
</script>

<div class="hero w-full">
    <div
        class="hero-content card border border-neutral-500 text-center min-w-80 p-5 mb-10 mx-5"
    >
        <h2 class="text-xl">
            {lang === Lang.Jp ? nameJapanese : name}
        </h2>
    </div>
</div>
<Documents {lang} {documents} />
