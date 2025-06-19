<script lang="ts">
    'use strict';
    
    import type { Parent } from "$lib/documents/documents";

    interface Props {
        parent: Parent
    }

    let {parent}: Props = $props();
</script>

<a href="/document/{parent.id}">
    <div class="badge badge-accent mb-5">
        Anime
    </div>
    <h1 class="text-xl link link-primary">
        {parent.name} / {#if parent.name_japanese}{parent.name_japanese}{/if}
    </h1>
</a>
