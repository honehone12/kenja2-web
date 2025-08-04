<script lang="ts">
    interface Props {
        initial: string;
        topics: string[];
    }

    let {initial, topics}: Props = $props();
</script>

<div class="w-60">
    <h2 class="text-xl">{initial}</h2>
    <ul class="list">
        {#each topics as topic}
            <li class="list-row">
                <a href="/textsearch/buffer?keyword={topic}&item-type=">
                    <p class="link link-primary text-lg">{topic}</p>
                </a>
            </li>
        {/each}
    </ul>
</div>


