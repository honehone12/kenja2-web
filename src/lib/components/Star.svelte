<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
        star: boolean;
        onStar: (star: boolean) => Promise<void>;
    }

    let {lang, star, onStar}: Props = $props();
</script>

<button
    onclick={() => onStar(!star)}
    aria-label={lang === Lang.Jp ? 'マイリスト' : 'My List'}
    class="tooltip"
    data-tip={lang === Lang.Jp ? 'マイリスト' : 'My List'}
>
    {#if star}
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#FFD54A" stroke="#E0B000" stroke-width="1" stroke-linejoin="round"> <path d="M12 2l3.09 6.26 6.82 1.01-4.93 4.8 1.16 6.93L12 18.77 5.86 21l1.16-6.93L2.09 9.27l6.82-1.01L12 2z"/> </svg>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 2l3.09 6.26 6.82 1.01-4.93 4.8 1.16 6.93L12 18.77 5.86 21l1.16-6.93L2.09 9.27l6.82-1.01L12 2z"/> </svg>
    {/if}
</button>
