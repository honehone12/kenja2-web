<script lang="ts">
    interface Props {
        kenjaMode: boolean;
    }

    let {kenjaMode = $bindable()}: Props = $props();
</script>

<label for="rating-rating">
    <span class="mr-2 tooltip" data-tip="Toggle if you are a Kenja">
        <h2 class="text-2xl">Kenja(R+18) Mode</h2>
    </span>
    <input 
        type="checkbox" 
        name="rating"
        value="hentai"
        id="rating-rating"
        class="toggle toggle-lg toggle-secondary mr-2"
        bind:checked={kenjaMode}
    />
</label>
