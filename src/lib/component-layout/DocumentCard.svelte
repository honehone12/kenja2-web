<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="card w-80 outline outline-secondary">
    <div class="card-body">
        {@render children()}
    </div>
</div>
