<script lang="ts">
    import { Lang } from "$lib";
    import mylistCtrl from "$lib/client/mylist-control";
    import CandidateCard from "$lib/components/CandidateCard.svelte";
    import NoResults from "$lib/components/NoResults.svelte";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import { onMount } from "svelte";
    import { flip } from "svelte/animate";
    import { scale } from "svelte/transition";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();
    let myList: FlatDocument[] | null = $state(null);

    function onUnstar(id: string) {
        if (!myList) {
            return;
        }

        const idx = myList.findIndex((value) => value.id === id);
        if (idx >= 0) {
            myList.splice(idx, 1);
        }
    }

    onMount(async () => {
        myList = await mylistCtrl.getMyList();
    });
</script>

<div class="mt-20 text-center">
    <h1 class="text-3xl font-semibold text-secondary">
        {#if lang === Lang.Jp}
            マイリスト
        {:else}
            My List
        {/if}
    </h1>
</div>
{#if myList && myList.length > 0}
    <div class="hero w-full mt-10">
        <div class="hero-content text-center">
            <span>
                <h2 class="text-lg">Tip💡</h2>
                <p>
                    {#if lang === Lang.Jp}
                        マイリストを削除するにはスター⭐を消します。
                    {:else}
                        Remove Star⭐ for Deleting My List.
                    {/if}
                </p>
            </span>
        </div>
    </div>
    <div class="hero w-full min-h-screen py-10">
        <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
            {#each myList as doc (doc.id)}
                <span
                    out:scale={{ duration: 140 }}
                    animate:flip={{ delay: 60, duration: 140 }}
                >
                    <CandidateCard {lang} {doc} {onUnstar} />
                </span>
            {/each}
        </div>
    </div>
{:else}
    <div class="hero w-full mt-10">
        <div class="hero-content text-center">
            <span>
                <h2 class="text-lg">Tip💡</h2>
                <p>
                    {#if lang === Lang.Jp}
                        マイリストを開始するにはスター⭐をつけます。
                    {:else}
                        Add Star⭐ for Starting My List.
                    {/if}
                </p>
            </span>
        </div>
    </div>
    <NoResults {lang} />
{/if}
<div class="hero w-full mb-20">
    <div class="hero-content text-center">
        <span>
            <h2 class="text-lg">Info💡</h2>
            <p>
                {#if lang === Lang.Jp}
                    マイリストはブラウザに保存され、ネットワークで送信されることはありません。<br
                    />
                    ブラウザーのデータを削除するとリストも削除されます。
                {:else}
                    My List is Saved on Your Browser, And will not be Sent on
                    Networks.<br />
                    The List will be Deleted When You Delete Browser's Data.
                {/if}
            </p>
        </span>
    </div>
</div>
