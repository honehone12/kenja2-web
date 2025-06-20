<script lang="ts">
    'use strict';

    interface Props {
        useUnspecified: boolean;
    }

    let {useUnspecified}: Props = $props();
</script>

<div class="flex flex-col">
    <fieldset>
        {#if useUnspecified}
            <div class="mb-2">
                <input 
                    type="radio" 
                    name="item-type" 
                    id="all" 
                    value="all" 
                    checked={useUnspecified} 
                    class="radio radio-lg radio-secondary" 
                />
                <label for="all" class="text-lg">All</label>
            </div>    
        {/if}
        <div class="mb-2">
            <input 
                type="radio" 
                name="item-type" 
                id="anime" 
                value="anime" 
                checked={!useUnspecified}
                class="radio radio-lg radio-secondary" 
            />
            <label for="anime" class="text-lg">Anime</label>
        </div>
        <div>
            <input 
                type="radio" 
                name="item-type" 
                id="character" 
                value="character" 
                class="radio radio-lg radio-secondary" 
            />
            <label for="character" class="text-lg">Character</label>
        </div>
    </fieldset>
</div>
