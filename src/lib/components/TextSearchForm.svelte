<script lang="ts">
    import KeywordInput from "$lib/components/KeywordInput.svelte";
    import ItemTypeRadio from "$lib/components/ItemTypeRadio.svelte";
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
        <ItemTypeRadio {lang} />
    </div>
    <input
        type="hidden"
        name="lang"
        id="lang-lang"
        value={lang === Lang.Jp ? "ja" : "en"}
    />
</form>
