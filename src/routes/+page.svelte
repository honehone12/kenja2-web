<script lang="ts">
    import TextSearchForm from "$lib/components/TextSearchForm.svelte";
</script>

<div class="hero w-full min-h-screen py-20">
    <div class="hero-content flex flex-col">
        <figure class="mb-10">
            <img
                src="/kenja2_logo.png"
                alt="Kenja logo with illustration of wise man"
                class="max-w-40" 
            />
        </figure>
        <div class="text-center mb-10">
            <h2 class="text-5xl mb-10">Anime Kenja</h2>
            <a href="/about"><p class="text-lg link link-primary">More infomation</p></a>
        </div>
        <TextSearchForm isLandingPage={true}/>
        <div class="text-center mt-40">
            <h1 class="text-2xl mb-10">Features</h1>
            <h2 class="text-2xl mb-5">Keywords and similality Anime Search engine.</h2>
            <p class="text-lg mb-10">
                This is a web site just for searching animes,<br> 
                including full text search and vector search.
            </p>
            <h2 class="text-2xl mb-5">No anonymous reviews.</h2>
            <p class="text-lg mb-10">
                You will never see reviews that is just saying<br>
                "Hype!! ⭐10" nor<br>
                "I don't understand ⭐1".
            </p>
            <h2 class="text-2xl mb-5">Without personalization.</h2>
            <p class="text-lg mb-10">
                You might want to watch "Kirara" anime today<br>
                even though you watched "Jump" anime yesterday. 
            </p>
        </div>
    </div>
</div>
