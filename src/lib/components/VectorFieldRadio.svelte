<script lang="ts">
    'use strict';

    interface Props {
        name: string;
    }

    let {name}: Props = $props(); 
</script>

<div class="flex flex-col">
    <fieldset>
        <div class="mb-2">
            <input 
                type="radio"
                {name}
                id="{name}-text"
                value="text"
                checked={true}
                class="radio radio-lg radio-secondary"
            />
            <label for="{name}-text" class="text-lg">Text</label>
        </div>
        <div class="mb-2">
            <input 
                type="radio"
                {name}
                id="{name}-image"
                value="image"
                class="radio radio-lg radio-secondary"
            />
            <label for="{name}-image" class="text-lg">Image</label>
        </div>
    </fieldset>
</div>
