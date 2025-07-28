<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    import TextSearchForm from "$lib/components/TextSearchForm.svelte";
</script>

<div class="hero w-full min-h-screen py-10">
    <div class="hero-content flex flex-col">
        <Logo/>
        <div class="text-center text-3xl mb-10">
            <h1>Anime Kenja Search</h1>
        </div>
        <TextSearchForm useFlexible={true}/>
    </div>
</div>
