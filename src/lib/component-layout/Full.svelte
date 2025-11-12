<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="hero min-h-screen w-full">
    <div class="hero-content">
        {@render children()}
    </div>
</div>
