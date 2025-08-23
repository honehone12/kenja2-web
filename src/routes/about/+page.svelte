<script>
    import { Lang } from "$lib";
    import About from "$lib/pages/About.svelte";

    let {data} = $props();
</script>

<svelte:head>
	{#if data.lang === Lang.Jp}
		<title>ケンジャ - アバウト</title>
		<meta
			name="description"
			content="このページではケンジャについて初めての人でもわかりやすく説明しています。"
		/>
	{:else}
		<title>Kenja - About</title>
		<meta
			name="description"
			content="This page explains Kenja in an easy-to-understand manner even for first-time users."
		/>
	{/if}
</svelte:head>

<About lang={data.lang}/>
