<script lang="ts">
    import { type Topic } from "$lib/client/topic";    
    import TopicList from "$lib/components/TopicList.svelte";

    const TOPICS: Topic[] = [
        {
            initial: 'A',
            topics: ['angel', 'android', 'athlete']
        },
        {
            initial: 'B',
            topics: ['baseball', 'basketball', 'brother']
        },
        {
            initial: 'C',
            topics: ['club']
        },
        {
            initial: 'D',
            topics: ['demon', 'detective', 'doctor', 'dragon']
        },
        {
            initial: 'E',
            topics: ['elf']
        },
        {
            initial: 'F',
            topics: ['father']
        },
        {
            initial: 'G',
            topics: ['game', 'ghost', 'gun']
        },
        {
            initial: 'H',
            topics: ['hitozuma']
        },
        {
            initial: 'I',
            topics: ['idol', 'imouto', 'isekai']
        },
        {
            initial: 'K',
            topics: ['kunoichi']
        },
        {
            initial: 'M',
            topics: ['maid', 'maou', 'mahou', 'megami', 'mermaid', 'mother']
        },
        {
            initial: 'N',
            topics: ['netorare', 'ninja', 'nurse']
        },
        {
            initial: 'O',
            topics: ['okusama', 'oni']
        },
        {
            initial: 'P',
            topics: ['pirate', 'police', 'prince', 'princess']
        },
        {
            initial: 'R',
            topics: ['rock']
        },
        {
            initial: 'S',
            topics: ['samurai', 'sister', 'succubus', 'sword']
        },
        {
            initial: 'T',
            topics: ['teacher', 'tennis', 'twins']
        },
        {
            initial: 'V',
            topics: ['vampire', 'volleyball']
        },
        {
            initial: 'W',
            topics: ['witch']
        },
        {
            initial: 'Y',
            topics: ['yuki onna', 'yuusha']
        }
    ];
</script>

<svelte:head>
	<title>Anime Kenja - Anime and Character Topics and Keywords</title>
	<meta
		name="description"
		content="List of keywords for hentai animes and characters. Search your hentai favorites by topics."
	/>
</svelte:head>

<div class="w-full min-h-screen">
    <div class="text-center mt-20">
        <h1 class="text-3xl text-info">Hentai Anime Topics</h1>
    </div>
    <div class="hero">
        <div class="hero-content">
            <TopicList topics={TOPICS} kenjaMode={true}/>
        </div>
    </div>
</div>
