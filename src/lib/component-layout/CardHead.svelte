<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="w-68 mb-5">
    <span class="flex justify-between">
        {@render children()}
    </span>
</div>
