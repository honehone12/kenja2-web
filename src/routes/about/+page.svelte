<script>
    import { Lang } from "$lib";
    import About from "$lib/pages/About.svelte";

    let {data} = $props();
</script>

<svelte:head>
	{#if data.lang === Lang.Jp}
		<title>ケンジャニメ - ケンジャニメについて</title>
		<meta
			name="description"
			content="このページではケンジャニメについて初めての人でもわかりやすく説明しています。"
		/>
	{:else}
		<title>Kenjanime - About Kenjanime</title>
		<meta
			name="description"
			content="This page explains Kenjanime in an easy-to-understand manner even for first-time users."
		/>
	{/if}
</svelte:head>

<About lang={data.lang}/>
