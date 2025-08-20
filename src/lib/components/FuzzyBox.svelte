<script lang="ts">
    interface Props {
        usePink: boolean;
    }

    let {usePink}: Props = $props();
</script>

<label for="fuzzy-fuzzy">
    <span class="mr-2 tooltip" data-tip="Use fuzzy search">
        <h2 class="text-2xl">Fuzzy Search</h2>
    </span>
    <input
        checked 
        type="checkbox" 
        name="fuzzy"
        value="use"
        id="fuzzy-fuzzy"
        class="checkbox checkbox-lg {usePink ? 'checkbox-secondary' : 'checkbox-accent'}"
    >
</label>
