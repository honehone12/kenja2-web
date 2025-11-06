<script lang="ts">
    import KeywordInput from "$lib/components/KeywordInput.svelte";
    import ItemTypeRadioText from "$lib/components/ItemTypeRadioText.svelte";
    import FuzzyBox from "$lib/components/FuzzyBox.svelte";
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
        useFlexible: boolean;
        onsubmit: (() => void) | null;
    }

    let { lang, useFlexible, onsubmit }: Props = $props();
</script>

<form method="get" action="/textsearch/buffer" {onsubmit}>
    <KeywordInput {lang} {useFlexible} />
    <div class="mt-5 ml-5">
        <FuzzyBox {lang} />
    </div>
    <div class="mt-5 ml-5">
        <ItemTypeRadioText {lang} />
    </div>
    {#if lang === Lang.Jp}
        <input type="hidden" name="lang" id="lang-lang" value="ja" />
    {/if}
</form>
