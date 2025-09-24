<script lang="ts">
    import { Lang, MAX_KW_LEN } from "$lib";

    interface Props {
        lang: Lang;
        useFlexible: boolean;
    }

    let { lang, useFlexible }: Props = $props();
</script>

<div class="join">
    <label
        for="keyword-keyword"
        class="join-item input input-lg {useFlexible ? 'md:w-xl lg:w-2xl' : ''}"
    >
        <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
                ><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"
                ></path></g
            ></svg
        >
        <input
            type="text"
            name="keyword"
            required
            maxlength={MAX_KW_LEN}
            placeholder={lang === Lang.Jp
                ? "キーワードを入力"
                : "Enter Keywords"}
            id="keyword-keyword"
        />
    </label>
    <button type="submit" class="join-item btn btn-accent btn-lg w-20">
        {#if lang === Lang.Jp}
            検索
        {:else}
            Search
        {/if}
    </button>
</div>
