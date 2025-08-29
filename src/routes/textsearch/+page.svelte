<script lang="ts">
    import { Lang } from "$lib";
    import TextSearchForm from "$lib/components/TextSearchForm.svelte";

    let {data} = $props();
</script>

<svelte:head>
    {#if data.lang === Lang.Jp}
        <title>ケンジャ - キーワード検索</title>
        <meta
            name="description"
            content="アニメとキャラクターのキーワード検索。"
        />
    {:else}
        <title>Kenja - Keyword Search</title>
        <meta
            name="description"
            content="Keyword search for animes and characters."
        />
    {/if}
</svelte:head>

<div class="hero w-full min-h-screen py-20">
    <div class="hero-content flex flex-col">
        <figure>
            <img
                src="/kenja2_logo.png"
                alt="Kenja logo with illustration of wise man"
                class="size-40 my-10" 
            />
        </figure>
        <div class="text-center text-secondary text-3xl mb-10">
            <h1>Anime & Character Search</h1>
        </div>
        <TextSearchForm 
            useFlexible={true} 
            onsubmit={null}
        />
    </div>
</div>
