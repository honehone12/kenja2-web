<script lang="ts">
    'use strict'

    import TextSearchForm from "$lib/components/TextSearchForm.svelte";
</script>

<div class="hero w-full min-h-screen py-20">
    <div class="hero-content flex flex-col">
        <figure class="mb-5 mt-20">
            <img
                src="Kenja2Logo.png"
                alt="Kenja logo with illustration of wise man"
                class="max-w-40" 
            />
        </figure>
        <div class=" text-center mb-10">
            <h1 class="text-5xl mb-10">Kenja</h1>
            <h2 class="text-2xl">Just a Anime Search Engine.</h2>
        </div>
        <TextSearchForm/>        
    </div>
</div>
