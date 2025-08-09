<script lang="ts">
    import Topic from "$lib/components/Topic.svelte";

    interface Topic {
        initial: string;
        topics: string[];
    }

    const TOPICS: Topic[] = [
        {
            initial: 'A',
            topics: ['angel', 'android']
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
            topics: ['demon', 'detective', 'doctor', 'dragon', 'dwarf']
        },
        {
            initial: 'E',
            topics: ['elf']
        },
        {
            initial: 'F',
            topics: ['father', 'fishing', 'football']
        },
        {
            initial: 'G',
            topics: ['game', 'ghost', 'grasses', 'gun']
        },
        {
            initial: 'H',
            topics: ['hacker']
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
            topics: ['ninja', 'nurse']
        },
        {
            initial: 'O',
            topics: ['oni']
        },
        {
            initial: 'P',
            topics: ['pirate', 'police']
        },
        {
            initial: 'R',
            topics: ['rock']
        },
        {
            initial: 'S',
            topics: ['samurai', 'sister', 'soccer', 'succubus', 'sword']
        },
        {
            initial: 'T',
            topics: ['teacher', 'tennis', 'twins']
        },
        {
            initial: 'V',
            topics: ['vampire']
        },
        {
            initial: 'W',
            topics: ['witch']
        },
        {
            initial: 'Y',
            topics: ['yuki onna', 'yuusha']
        },
        {
            initial: 'Z',
            topics: ['zombie']
        }
    ];
</script>

<svelte:head>
	<title>Anime Kenja - Anime and Character Topics and Keywords</title>
	<meta
		name="description"
		content="List of keywords for animes and characters. Search your favorites by topics."
	/>
</svelte:head>

<div class="w-full min-h-screen">
    <div class="p-20 flex flex-wrap gap-x-10 gap-y-5 justify-center">
        {#each TOPICS as topic}
            <Topic 
                initial={topic.initial} 
                topics={topic.topics}
            />
        {/each}
    </div>
</div>

