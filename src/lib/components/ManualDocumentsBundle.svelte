<script lang="ts">
    import type { FlatDocument } from "$lib/documents/anime-search/documents";
    import ManualDocuments from "$lib/components/ManualDocuments.svelte";
    import type { Lang } from "$lib";
    import { onMount } from "svelte";
    import { INDEX_DB_MAX, IndexDb } from "$lib/client/indexdb";

    interface Docs {
        name: string;
        nameJapanese: string;
        list: FlatDocument[];
    }

    interface Props {
        lang: Lang;
        bundle: Docs[];
    }

    let { lang, bundle }: Props = $props();
    let myMap: Map<string, boolean> = $state(new Map());
    let indexdb: IndexDb | null = null;

    function hasStar(id: string) {
        return myMap.has(id);
    }

    async function refresh() {
        if (!indexdb) {
            return;
        }

        const myList = await indexdb.getMyListKeys();
        const map = new Map();
        myList.forEach((value) => map.set(value, true));
        myMap = map;
    }

    async function onStar(id: string, star: boolean, list: FlatDocument[]) {
        if (!indexdb) {
            console.warn("index db is not initialized yet.");
            return;
        }

        try {
            if (star) {
                if (myMap.size < INDEX_DB_MAX) {
                    const doc = list.find((value) => value.id === id);
                    if (doc && !myMap.has(id)) {
                        await indexdb.addMyList(doc);
                    }
                }
            } else {
                if (myMap.has(id)) {
                    await indexdb.deleteMyList(id);
                }
            }
        } catch (e) {
            console.error(e);
            return;
        }

        refresh();
    }

    onMount(async () => {
        try {
            indexdb = await IndexDb.open();
            refresh();
        } catch (e) {
            console.error(e);
        }
    });
</script>

{#each bundle as docs, i (i)}
    <ManualDocuments
        {lang}
        name={docs.name}
        nameJapanese={docs.nameJapanese}
        list={docs.list}
        {hasStar}
        onStar={(id, star) => onStar(id, star, docs.list)}
    />
{/each}
