<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();
</script>

<label for="fuzzy-fuzzy">
    <span
        class="mr-2 tooltip"
        data-tip={lang === Lang.Jp ? "あいまいな場合は選択" : "Select if fuzzy"}
    >
        <h2 class="text-2xl">
            {#if lang === Lang.Jp}
                あいまい検索
            {:else}
                Fuzzy Search
            {/if}
        </h2>
    </span>
    <input
        checked
        type="checkbox"
        name="fuzzy"
        value="use"
        id="fuzzy-fuzzy"
        class="checkbox checkbox-lg checkbox-accent"
    />
</label>
