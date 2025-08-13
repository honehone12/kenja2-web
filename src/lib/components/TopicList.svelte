<script lang="ts">
    import type { Topic } from "$lib/client/topic";
    import TopicLinks from "./TopicLinks.svelte";

    interface Props {
        topics: Topic[];
        kenjaMode: boolean;
    }

    let {topics, kenjaMode}: Props = $props();
</script>

<div class="flex flex-wrap justify-center gap-x-10 gap-y-5 my-20 px-20">
    {#each topics as topic}
        <TopicLinks {topic} {kenjaMode}/>
    {/each}
</div>
