<script lang="ts">
    import ErrorMessage from "$lib/components/ErrorMessage.svelte";

    let { data } = $props();
</script>

<main class="hero w-full h-screen">
    <div class="hero-content">
        <ErrorMessage lang={data.lang} />
    </div>
</main>
