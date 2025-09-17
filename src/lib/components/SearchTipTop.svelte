<script lang="ts">
    import { Lang } from "$lib";
    import { SearchType } from "$lib/client/search";

    interface Props {
        lang: Lang;
        searchType: SearchType;
    }

    let { lang, searchType }: Props = $props();
</script>

{#if searchType === SearchType.Text}
    <div class="mt-10 mx-5 text-center">
        <h2 class="text-lg">Tip💡</h2>
        <p>
            {#if lang === Lang.Jp}
                他のキーワードを試すには下部のサーチアイコンをクリックします。
            {:else}
                Click the search icon at the bottom to try other keywords.
            {/if}
        </p>
    </div>
{:else if searchType === SearchType.Random}
    <div class="mt-10 mx-5 text-center">
        <h2 class="text-lg">Tip💡</h2>
        <p>
            {#if lang === Lang.Jp}
                ランダムはだいたい一日おきに変わります。
            {:else}
                The random ones change roughly every other day.
            {/if}
        </p>
    </div>
{/if}
