<script lang="ts">
    import { Lang } from "$lib";
    import { KenjaIndexDb } from "$lib/client/indexdb";
    import CandidateCard from "$lib/components/CandidateCard.svelte";
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import { onMount } from "svelte";

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
            }
            myList = await indexdb.getMyList();
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
<div class="hero w-full">
    <div class="hero-content flex flex-wrap gap-x-10 gap-y-5">
        {#each myList as doc (doc.id)}
            <CandidateCard
                {doc}
                {lang}
                star
                onStar={(id, _) => unstar(id)}  
            />
        {/each}
    </div>
</div>