<script lang="ts">
    import { Lang } from "$lib";
    import ItemTypeBadge from "$lib/components/ItemTypeBadge.svelte";
    import { ItemType } from "$lib/documents/anime-search/queries";
    import DocNameLabel from "$lib/components/DocNameLabel.svelte";
    import Star from "$lib/components/Star.svelte";

    interface Props {
        lang: Lang;
        name: string | undefined;
        nameJapanese: string | undefined;
        unique: string | undefined;
        star: boolean;
        onStar: (star: boolean) => Promise<void>;
    }

    let {
        lang, 
        name, 
        nameJapanese, 
        unique,
        star,
        onStar
    }: Props = $props();
</script>

{#if unique}
    <div class="card w-80 outline outline-secondary">
        <div class="card-body">
            <div class="mb-5">
                <ItemTypeBadge itemType={ItemType.YVideo}/>
            </div>
            <div>
                <Star 
                    {lang} 
                    {star} 
                    {onStar}
                />
            </div>
            <span class="mb-2">
                <DocNameLabel 
                    {lang}
                    useLink={true} 
                    {name} 
                    {nameJapanese}
                />
            </span>
            <iframe  
                src="https://www.youtube-nocookie.com/embed/{unique}" 
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                class="rounded-md my-2"
            ></iframe>
            <span class="text-center">
                <a href="https://www.youtube.com/watch?v={unique}">
                    <button
                        class="btn btn-xs btn-circle btn-accent tooltip w-40"
                        data-tip={lang === Lang.Jp ? 'Youtubeへ移動する' : 'Go to Youtube'}
                    >
                        {#if lang === Lang.Jp}
                            Youtubeで見る
                        {:else}
                            Watch on Youtube
                        {/if}
                    </button>
                    <!-- <p class="link link-primary">Wath on Youtube</p> -->
                </a>
            </span>
        </div>
    </div>    
{/if}
