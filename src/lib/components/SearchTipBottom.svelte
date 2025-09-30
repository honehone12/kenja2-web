<script lang="ts">
    import { Lang, SearchType } from "$lib";
    
    interface Props {
        lang: Lang;
        searchType: SearchType;
    }

    let { lang, searchType }: Props = $props();
</script>

{#if searchType === SearchType.Text}
    <div class="text-center mb-20 mx-5">
        <h2 class="text-lg">Tip💡</h2>
        <p>
            {#if lang === Lang.Jp}
                ファジー検索をONにするかどうかによって検索結果は変わります。
            {:else}
                Search results will vary depending on whether fuzzy search is ON
                or not.
            {/if}
        </p>
    </div>
{/if}
