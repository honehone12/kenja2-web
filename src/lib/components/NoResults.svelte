<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
    }

    let {lang}: Props = $props();
</script>

<div class="hero min-h-screen w-full">
    <h2 class="hero-content text-xl">
        {#if lang == Lang.Jp}
            アイテムが見つかりませんでした。
        {:else}
            No Items were Found
        {/if}
    </h2>
</div>
