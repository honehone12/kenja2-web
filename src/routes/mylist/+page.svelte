<script>
    import {Lang} from "$lib";
    import MyList from "$lib/pages/MyList.svelte";

    let {data} = $props();
</script>

<svelte:head>
	{#if data.lang === Lang.Jp}
		<title>ケンジャニメ - マイリスト</title>
		<meta
			name="description"
			content="お気に入りのアイテムをリストにして保存します。"
		/>
	{:else}
		<title>Kenjanime - My List</title>
		<meta
			name="description"
			content="Save List of Your Favorite Items."
		/>
	{/if}
</svelte:head>

<MyList lang={data.lang}/>
