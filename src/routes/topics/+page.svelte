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
            topics: ['baseball', 'basketball']
        },
        {
            initial: 'D',
            topics: ['demon', 'detective', 'doctor', 'dwarf']
        },
        {
            initial: 'E',
            topics: ['elf']
        },
        {
            initial: 'F',
            topics: ['fighter', 'fishing', 'football']
        },
        {
            initial: 'G',
            topics: ['game', 'grasses', 'gun']
        },
        {
            initial: 'H',
            topics: ['hacker']
        },
        {
            initial: 'I',
            topics: ['idol', 'isekai']
        },
        {
            initial: 'K',
            topics: ['kunoichi']
        },
        {
            initial: 'M',
            topics: ['megami']
        },
        {
            initial: 'N',
            topics: ['ninja', 'nurse']
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
            topics: ['samurai', 'soccer', 'sword']
        },
        {
            initial: 'T',
            topics: ['Tennis']
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
            topics: ['yuki onna']
        },
        {
            initial: 'Z',
            topics: ['zombie']
        }
    ];
</script>

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

