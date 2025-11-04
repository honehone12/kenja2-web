<script lang="ts">
    import AiApp from "$lib/pages/AiApp.svelte";

    let { data } = $props();
</script>

<AiApp lang={data.lang} />
