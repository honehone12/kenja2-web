<script>
    import MyList from "$lib/pages/MyList.svelte";

    let {data} = $props();
</script>

<MyList lang={data.lang}/>
