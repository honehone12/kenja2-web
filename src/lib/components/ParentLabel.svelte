<script lang="ts">
    import { Lang, preparedTextSearchQuery } from "$lib";

    interface Props {
        lang: Lang;
        name: string | undefined;
        nameJapanese: string | undefined;
    }

    let { lang, name, nameJapanese }: Props = $props();
</script>

{#if name}
    <a
        href="/textsearch/buffer?{preparedTextSearchQuery(name, nameJapanese, lang)}"
    >
        <h3 class="link link-primary">
            {name}{nameJapanese ? ` / ${nameJapanese}` : ""}
        </h3>
    </a>
{/if}
