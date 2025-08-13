<script lang="ts">
    import type { Topic } from "$lib/client/topic";

    interface Props {
        topic: Topic;
        kenjaMode: boolean;
    }

    let {topic, kenjaMode}: Props = $props();
</script>

<div class="w-50">
    <h2 class="text-2xl">{topic.initial}</h2>
    <ul class="list">
        {#each topic.topics as kw}
            <li class="list-row">
                {#if kenjaMode}
                    <a href="/textsearch/buffer?keyword={kw}&rating=hentai&item-type=">
                        <p class="link link-secondary text-lg text-end">{kw} (R18+)</p>
                    </a>
                {:else}
                    <a href="/textsearch/buffer?keyword={kw}&item-type=">
                        <p class="link link-primary text-lg">{kw}</p>
                    </a>
                {/if}
            </li>
        {/each}
    </ul>
</div>
