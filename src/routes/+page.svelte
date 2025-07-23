<script lang="ts">
    import TextSearchForm from "$lib/components/TextSearchForm.svelte";
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
            <h1 class="text-5xl mb-10">Anime Kenja</h1>
            <a href="/about"><p class="text-lg link link-primary">More infomation</p></a>
        </div>
        <TextSearchForm isLandingPage={true}/>
        <div class="text-center mt-20">
            <h2 class="text-2xl mb-5">Just a Anime Search Engine.</h2>
            <p class="text-lg mb-2">
                This is a web site just for searching animes,<br> 
                including full text search and vector search.
            </p>
        </div>
    </div>
</div>
