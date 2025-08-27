<script lang="ts">
    import { ITypeConv, type ItemType } from "$lib/documents/anime-search/queries";

    interface Props {
        id: string;
        itemType: ItemType;
        name: string | undefined;
        img: string | undefined;
        src: string | undefined;
    }

    let {id, itemType, name, img, src}: Props = $props();
</script>

<div class="text-center">
    {#if name && img}
        <a 
            href="/vectorsearch/buffer/{id}?item-type={ITypeConv.toString(itemType)}" 
            class="tooltip" 
            data-tip="Search Similar Images"
        >
            <img 
                src="/{img}" 
                alt="an anime image of {name}"
                class="card-action max-w-60"
                loading="lazy"        
            >
        </a>
    {/if}
    {#if src}
        <a href="{src}">
            <p class="link link-primary">source</p>
        </a>
    {/if}
</div>
