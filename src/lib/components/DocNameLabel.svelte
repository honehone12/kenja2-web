<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
        name: string | undefined;
        nameJapanese: string | undefined;
    }

    let {lang, name, nameJapanese}: Props = $props();
</script>

{#if lang === Lang.Jp}
    {#if nameJapanese}
        <a href="/textsearch/buffer?keyword={nameJapanese}&item-type=all">
            <h2 class="card-title link link-primary text-xl">{nameJapanese}</h2>
        </a>
    {/if}
    {#if name}
        <h2 class="text-xl mb-5">{name}</h2>
    {/if}
{:else}
    {#if nameJapanese}    
        <h2 class="text-xl">{nameJapanese}</h2>
    {/if}
    {#if name}
        <a href="/textsearch/buffer?keyword={name}&item-type=all">
            <h2 class="card-title link link-primary text-xl mb-5">{name}</h2>
        </a>
    {/if}
{/if}