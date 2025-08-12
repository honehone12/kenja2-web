<script lang="ts">
    import { openAgeModal } from "$lib/client/modal";
    import AgeModal from "$lib/components/AgeModal.svelte";
    import { onMount } from "svelte";

    let {data} = $props();

    onMount(() => {
        if (data.needAgeVerification) {
            openAgeModal();
        }
    })
</script>


<AgeModal ref="/kenja"/>
