<script lang="ts">
    interface Props {
        safeSearch: boolean;
    }

    let {safeSearch = $bindable()}: Props = $props();
</script>

<label for="rating-rating">
    <span class="mr-2 tooltip" data-tip="Use safe search">
        <h2 class="text-2xl">Safe Search</h2>
    </span>
    <input 
        type="checkbox" 
        name="rating"
        value="hentai"
        id="rating-rating"
        class="toggle toggle-lg toggle-accent mr-2"
        bind:checked={safeSearch}
    />
</label>
