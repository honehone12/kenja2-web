<script lang="ts">
    import Ai from "$lib/pages/Ai.svelte";

    let { data } = $props();
</script>

<Ai lang={data.lang} />
