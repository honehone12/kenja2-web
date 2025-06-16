<script lang="ts">
    'use strict'

    import SearchInput from "$lib/components/SearchInput.svelte";
</script>

<div class="hero w-full h-full">
    <div class="hero-content flex flex-col mt-20 mb-60">
        <figure class="mb-10 mt-20">
            <img
                src="Kenja2Logo.png"
                alt="Kenja logo with illustration of wise man"
                class="max-w-60" 
            />
        </figure>
        <div class="text-2xl text-center mb-10">
            <p>Kenja. Just a Anime Search Engine.</p>
        </div>
        <SearchInput/>        
    </div>
</div>
