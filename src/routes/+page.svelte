<script>
    import Logo from "$lib/components/Logo.svelte";
    import MaintenanceWarn from "$lib/components/MaintenanceWarn.svelte";
</script>

<div class="hero w-full min-h-screen py-20">
    <div class="hero-content flex flex-col">
        <Logo/>
        <div class="text-center">
            <h1 class="text-5xl">Anime Kenja</h1>
        </div>
        <div>
            <div class="mb-5">
                <a href="/about">
                    <p class="text-lg link link-primary">More infomation</p>
                </a>
            </div>
            <div class="mb-10">
                <a href="/search">
                    <p class="text-lg link link-primary">Search</p>
                </a>
            </div>
        </div>
        <MaintenanceWarn/>
        <h1 class="text-center text-2xl mt-20 mb-10">How to use❓</h1>
        <p class="text-lg mb-10">1. Find your favorite anime or character with full text search</p>
        <p class="text-lg mb-10">2. Find anime or character related to your favorite item</p>
        <p class="text-lg mb-10">3. Find similar anime or character with text vector search</p>
        <p class="text-lg mb-10">4. Try image vector search</p>
        <p class="text-lg mb-10">5. Try staff vector search</p>
        <p class="text-lg mb-10">6. Back to MAL 😝</p>
        <p class="text-lg mb-10">7. Ask to reddit 🤪</p>
    </div>
</div>
