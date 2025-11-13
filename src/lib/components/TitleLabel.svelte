<script lang="ts">
    import { goto } from "$app/navigation";
    import { Lang, preparedTextSearchQuery } from "$lib";

    interface Props {
        lang: Lang;
        useLink: boolean;
        name: string | undefined;
        nameJapanese: string | undefined;
        onsearch?: () => Promise<void>;
    }

    let { lang, useLink, name, nameJapanese, onsearch }: Props = $props();

    function searchUrl() {
        return `/textsearch/buffer?${preparedTextSearchQuery(name, nameJapanese, lang)}`;
    }
</script>

{#if lang === Lang.Jp}
    {#if name}
        <h2 class="text-lg">{name}</h2>
    {/if}
    {#if nameJapanese}
        {#if useLink}
            <a
                href={searchUrl()}
                onclick={async (event) => {
                    if (onsearch) {
                        event.preventDefault();
                        await onsearch();
                    }

                    goto(searchUrl());
                }}
            >
                <h2 class="card-title link link-primary text-xl">
                    {nameJapanese}
                </h2>
            </a>
        {:else}
            <h2 class="card-title text-xl">{nameJapanese}</h2>
        {/if}
    {/if}
{:else}
    {#if nameJapanese}
        <h2 class="text-lg">{nameJapanese}</h2>
    {/if}
    {#if name}
        {#if useLink}
            <a
                href={searchUrl()}
                onclick={async (event) => {
                    if (onsearch) {
                        event.preventDefault();
                        await onsearch();
                    }

                    goto(searchUrl());
                }}
            >
                <h2 class="card-title link link-primary text-xl">{name}</h2>
            </a>
        {:else}
            <h2 class="card-title text-xl">{name}</h2>
        {/if}
    {/if}
{/if}
