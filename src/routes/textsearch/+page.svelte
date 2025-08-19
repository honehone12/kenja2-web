<script lang="ts">
    import TextSearchForm from "$lib/components/TextSearchForm.svelte";
    import { page } from "$app/state";
</script>

<svelte:head>
	<title>Anime Kenja - Anime and Character Keyword Search</title>
	<meta
		name="description"
		content="Keyword search for animes and characters, featuring full text search."
	/>
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
        <div class="text-center text-3xl mb-10">
            <h1>Anime and Character Search</h1>
        </div>
        <TextSearchForm 
            useFlexible={true} 
            onsubmit={null}
        />
    </div>
</div>
