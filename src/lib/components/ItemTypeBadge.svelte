<script lang="ts">
    import { ItemType } from "$lib/documents/anime-search/queries";

    interface Props {
        itemType: ItemType
    }

    let {itemType}: Props = $props();

    function label(itemType: ItemType) {
        switch (itemType) {
            case ItemType.Anime:
                return 'Anime アニメ';
            case ItemType.Character:
                return 'Character キャラクター';
            case ItemType.YVideo:
                return 'Trailer トレーラー'
            default:
                return '';
        }
    }
</script>

<div class="badge badge-dash badge-accent">
    <p>{label(itemType)}</p>
</div>
