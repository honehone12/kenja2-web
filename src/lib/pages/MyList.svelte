<script lang="ts">
    import { Lang } from "$lib";
    import { KenjaIndexDb } from "$lib/client/indexdb";
    import CandidateCard from "$lib/components/CandidateCard.svelte";
    import NoResults from "$lib/components/NoResults.svelte";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import { onMount } from "svelte";
    import { flip } from "svelte/animate";
    import { scale } from "svelte/transition";

    interface Props {
        lang: Lang;
    }

    let {lang}: Props = $props();
    let indexdb: KenjaIndexDb | null = $state(null);
    let myList: FlatDocument[] = $state([]);

    async function unstar(id: string) {
        if (!indexdb) {
            console.warn('index db is not initialized');
            return;
        }

        try {
            const doc = myList.find((value) => value.id === id);
            if (doc) {
                await indexdb.deleteMyList(id);
                myList = await indexdb.getMyList();
            }
        } catch (e) {
            console.error(e);
        }
    }

    onMount(async () => {
        try {
            indexdb = await KenjaIndexDb.open();
            myList = await indexdb.getMyList();
        } catch (e) {
            console.error(e);
        }
    });
</script>

<div class="mt-20 text-center">
    <h1 class="text-3xl text-secondary">
        {#if lang === Lang.Jp}
            マイリスト
        {:else}
            My List
        {/if}
    </h1>
</div>
{#if myList.length > 0}
    <div class="hero w-full min-h-screen py-20">
        <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
            {#each myList as doc (doc.id)}
                <span 
                    out:scale={{duration: 140}} 
                    animate:flip={{delay: 60, duration: 140}}
                >
                    <CandidateCard
                        {doc}
                        {lang}
                        star
                        onStar={(id, _) => unstar(id)}  
                    />
                </span>
            {/each}
        </div>
    </div>
{:else}
    <div class="hero w-full mt-20">
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
    <NoResults {lang}/>
{/if}
