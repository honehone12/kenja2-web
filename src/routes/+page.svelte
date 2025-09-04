<script lang="ts">
    import { Lang } from "$lib";
	import Top from "$lib/pages/Top.svelte";

    let {data} = $props();
</script>

<svelte:head>
	{#if data.lang === Lang.Jp}
		<title>ケンジャ - アニメ ＆ キャラクターの検索とレコメンデーション</title>
		<meta
			name="description"
			content="ケンジャはアニメ ＆ キャラクターの検索とベクターサーチによるレコメンデーションシステムです。"
		/>
	{:else}
		<title>Kenja - Anime & Character Search and Recommendation</title>
		<meta
			name="description"
			content="Kenja is a system for anime & character search and recommendation powered by vector search."
		/>
	{/if}
</svelte:head>

<Top lang={data.lang}/>
