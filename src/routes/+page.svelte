<script lang="ts">
    import { Lang } from "$lib";
	import Top from "$lib/pages/Top.svelte";

    let {data} = $props();
</script>

<svelte:head>
	{#if data.lang === Lang.Jp}
		<title>ケンジャ - アニメとキャラクター検索</title>
		<meta
			name="description"
			content="ケンジャは画像をポチポチ見ながら好きなアニメやキャラクターを探すウェブサイトです。"
		/>
	{:else}
		<title>Kenja - Anime and Character Search</title>
		<meta
			name="description"
			content="Kenja is a web site where you can search for your favorite anime and characters by clicking through images."
		/>
	{/if}
</svelte:head>

<Top lang={data.lang}/>
