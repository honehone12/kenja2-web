<script lang="ts">
    interface Props {
        useAll: boolean;
    }

    let {useAll}: Props = $props();
</script>

<div class="flex flex-col">
    <fieldset>
        {#if useAll}
            <div class="mb-2">
                <input 
                    type="radio" 
                    name="item-type" 
                    id="item-type-all" 
                    value="all" 
                    checked={useAll} 
                    class="radio radio-lg radio-accent" 
                />
                <label for="item-type-all" class="text-lg">All</label>
            </div>    
        {/if}
        <div class="mb-2">
            <input 
                type="radio" 
                name="item-type" 
                id="item-type-anime" 
                value="anime" 
                checked={!useAll}
                class="radio radio-lg radio-accent" 
            />
            <label for="item-type-anime" class="text-lg">Anime</label>
        </div>
        <div>
            <input 
                type="radio" 
                name="item-type" 
                id="item-type-character" 
                value="character" 
                class="radio radio-lg radio-accent" 
            />
            <label for="item-type-character" class="text-lg">Character</label>
        </div>
    </fieldset>
</div>
