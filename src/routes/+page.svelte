<script lang="ts">
    'use strict'

    import TextSearchForm from "$lib/components/TextSearchForm.svelte";

    let {data} = $props();

    async function ping() {
        try {
            await data.pingStream;
        } catch (error) {
            console.warn('ping failed');
        }
    }

    ping();
</script>

<div class="hero w-full min-h-screen py-20">
    <div class="hero-content flex flex-col">
        <figure class="mb-10">
            <img
                src="/Kenja2Logo.png"
                alt="Kenja logo with illustration of wise man"
                class="max-w-40" 
            />
        </figure>
        <div class="text-center mb-10">
            <h1 class="text-5xl mb-10">Kenja</h1>
            <h2 class="text-2xl mb-5">Just a Anime Search Engine.</h2>
            <p class="text-lg mb-2">This is a web site just for searching anime.</p>
            <a href="/about"><p class="text-lg link link-primary">More infomation</p></a>
        </div>
        <TextSearchForm/>
    </div>
</div>
