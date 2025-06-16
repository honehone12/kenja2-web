<script lang="ts">
    'use strict'

    import SearchInput from "$lib/components/SearchInput.svelte";
</script>

<div class="hero w-full h-full">
    <div class="hero-content flex flex-col">
        <figure class="mb-10 mt-20">
            <img
                src="Kenja2Logo.png"
                alt="Kenja logo with illustration of wise man"
                class="max-w-60" 
            />
        </figure>
        <div class="text-2xl text-center mb-10">
            <p>Kenja. Just A Anime Search Engine.</p>
        </div>
        <SearchInput/>
        <div class="mt-120 mb-60 text-lg text-center">
            <p>
                Kenja is a "Anime Search Engine" being developed by individual.
                You can search anime or character with some keywords.
                It's kind of reverse lookup of anime.
            </p>
            <br>
            <p>
                But actually, I understand data source is still small, 
                and contents are not enough.
                Sometimes works ok, but sometimes not.
            </p>
            <br>
            <p>I belive I'll work on it and it'll be improved. </p>
            <br>
            <p>So, please don't expect so much.</p>
            <p>Thank you for your understanding.</p>
        </div>
    </div>
</div>
