<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();
</script>

<h2
    class="text-2xl mb-3 tooltip"
    data-tip={lang === Lang.Jp
        ? "検索するアイテムを選択"
        : "Select items to search"}
>
    {#if lang === Lang.Jp}
        アイテムタイプ
    {:else}
        Item Type
    {/if}
</h2>
<div class="flex flex-col">
    <fieldset>
        <div class="mb-2">
            <input
                type="radio"
                name="item-type"
                id="item-type-anime"
                value="anime"
                class="radio radio-lg radio-accent"
                checked
            />
            <label for="item-type-anime" class="text-lg">
                {#if lang === Lang.Jp}
                    アニメ
                {:else}
                    Anime
                {/if}
            </label>
        </div>
        <div class="mb-2">
            <input
                type="radio"
                name="item-type"
                id="item-type-character"
                value="character"
                class="radio radio-lg radio-accent"
            />
            <label for="item-type-character" class="text-lg">
                {#if lang === Lang.Jp}
                    キャラクター
                {:else}
                    Character
                {/if}
            </label>
        </div>
    </fieldset>
</div>
