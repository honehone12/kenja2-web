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
        <div class="mt-40">
            <h1 class="text-center text-2xl mb-10">How to use❓</h1>
            <p class="text-lg mb-10">1. Find your favorite anime or character with full text search</p>
            <p class="text-lg mb-10">2. Find anime or character related to your favorite item</p>
            <p class="text-lg mb-10">3. Find similar anime or character with text vector search</p>
            <p class="text-lg mb-10">4. Try image vector search</p>
            <p class="text-lg mb-10">5. Try staff vector search</p>
            <p class="text-lg mb-10">6. Back to MAL 😝</p>
            <p class="text-lg mb-10">7. Ask to reddit 🤪</p>
        </div>
    </div>
</div>
