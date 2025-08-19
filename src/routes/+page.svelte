<script>
    import TopPageFeatures from "$lib/components/TopPageFeatures.svelte";
</script>

<svelte:head>
	<title>Kenja - Anime and Character Search Engine</title>
	<meta
		name="description"
		content="Anime Kenja is a anime and character search engine, featuring full text keyword search and similarity vector search."
	/>
</svelte:head>

<div class="py-20">
    <div class="hero w-full">
        <div class="hero-content flex flex-col">
            <figure>
                <img
                    src="/kenja2_logo.png"
                    alt="Kenja logo with illustration of wise man"
                    class="size-40 mb-10" 
                />
            </figure>
            <div class="text-center">
                <h1 class="text-5xl text-info mb-10">Kenja</h1>
                <p class="text-lg">
                    Kenja is a web site for searching animes and characters,<br>
                    featuring full text search and similarity vector search.
                </p>
                <a href="/about">
                    <p class="link link-primary text-lg mt-5">For more infomations</p>
                </a>
                <a href="/textsearch">
                    <p class="link link-primary text-lg mt-2">Search with your keywords</p>
                </a>
                <a href="/topics">
                    <p class="link link-primary text-lg mt-2">Find from topics</p>
                </a>
            </div>
        </div>
    </div>
    <TopPageFeatures/>
</div>
