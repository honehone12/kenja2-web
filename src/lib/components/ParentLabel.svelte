<script lang="ts">
    import { Lang, removeUrlCtrl } from "$lib";

    interface Props {
        lang: Lang;
        name: string | undefined;
        nameJapanese: string | undefined;
    }

    let { lang, name, nameJapanese }: Props = $props();
</script>

{#if name}
    <a
        href="/textsearch/buffer?keyword={lang === Lang.Jp && nameJapanese
            ? removeUrlCtrl(nameJapanese)
            : removeUrlCtrl(name)}&item-type=all{lang === Lang.Jp
            ? '&lang=ja'
            : ''}"
    >
        <h3 class="link link-primary">
            {name}{nameJapanese ? ` / ${nameJapanese}` : ""}
        </h3>
    </a>
{/if}
