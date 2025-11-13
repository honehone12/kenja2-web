<script lang="ts">
    import { goto } from "$app/navigation";
    import { Lang, preparedTextSearchQuery } from "$lib";

    interface Props {
        lang: Lang;
        name: string | undefined;
        nameJapanese: string | undefined;
        onsearch: () => Promise<void>;
    }

    let { lang, name, nameJapanese, onsearch }: Props = $props();

    function searchUrl() {
        return `/textsearch/buffer?${preparedTextSearchQuery(name, nameJapanese, lang)}`;
    }
</script>

{#if name}
    <a
        href={searchUrl()}
        onclick={async (event) => {
            event.preventDefault();

            await onsearch();
            goto(searchUrl());
        }}
    >
        <h3 class="link link-primary">
            {name}{nameJapanese ? ` / ${nameJapanese}` : ""}
        </h3>
    </a>
{/if}
