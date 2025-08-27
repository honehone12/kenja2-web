<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
        name: string | undefined;
        name_japanese: string | undefined;
    }

    let {lang, name, name_japanese}: Props = $props();
</script>

{#if lang === Lang.Jp}
    {#if name_japanese}
        <a href="/textsearch/buffer?keyword={name_japanese}&item-type=all">
            <h2 class="card-title link link-primary text-xl">{name_japanese}</h2>
        </a>
    {/if}
    {#if name}
        <h2 class="text-xl mb-5">{name}</h2>
    {/if}
{:else}
    {#if name_japanese}    
        <h2 class="text-xl">{name_japanese}</h2>
    {/if}
    {#if name}
        <a href="/textsearch/buffer?keyword={name}&item-type=all">
            <h2 class="card-title link link-primary text-xl mb-5">{name}</h2>
        </a>
    {/if}
{/if}