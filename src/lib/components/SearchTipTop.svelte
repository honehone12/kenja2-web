<script lang="ts">
    import { Lang, SearchType } from "$lib";
    import { page } from "$app/state";
    import { goto } from "$app/navigation";

    interface Props {
        lang: Lang;
        searchType: SearchType;
    }

    let { lang, searchType }: Props = $props();

    function refreshUrl() {
        const u = new URL(page.url);
        const q = u.searchParams;
        let t = "lang";
        if (q.has(t) && q.get(t) !== "ja") {
            q.delete(t);
        }

        t = "refresh";
        if (q.has(t)) {
            const raw = q.get(t) ?? "0";
            let refresh = parseInt(raw);
            if (!Number.isNaN(refresh)) {
                refresh++;
                q.set(t, refresh.toString());
                return u.toString();
            }
        }

        q.append(t, "0");
        return u.toString();
    }
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
                ランダムはだいたい一日おきに変わります。<br />
                待ちきれない場合は更新ボタンをクリックしてください。
            {:else}
                The random ones change roughly every other day.<br />
                If you can't wait, click the refresh button.
            {/if}
        </p>
        <button
            id="refresh"
            class="btn btn-accent w-30 mt-10"
            onclick={() => goto(refreshUrl(), { invalidateAll: true })}
        >
            {#if lang === Lang.Jp}
                更新
            {:else}
                Refresh
            {/if}
        </button>
    </div>
{/if}
