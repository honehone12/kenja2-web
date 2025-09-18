<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
        name: string | undefined;
        nameJapanese: string | undefined;
    }

    let { lang, name, nameJapanese }: Props = $props();

    function cleanName(name: string) {
        return name.replaceAll("&", " ").replaceAll("?", " ");
    }
</script>

{#if name}
    <a
        href="/textsearch/buffer?keyword={lang === Lang.Jp && nameJapanese
            ? cleanName(nameJapanese)
            : cleanName(name)}&item-type=all{lang === Lang.Jp
            ? '&lang=ja'
            : ''}"
    >
        <h3 class="link link-primary">
            {name}{nameJapanese ? ` / ${nameJapanese}` : ""}
        </h3>
    </a>
{/if}
