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
                class="radio radio-lg radio-accent"
            />
            <label for="{name}-text" class="text-lg">Text</label>
        </div>
        <div class="mb-2">
            <input 
                type="radio"
                {name}
                id="{name}-image"
                value="image"
                class="radio radio-lg radio-accent"
            />
            <label for="{name}-image" class="text-lg">Image</label>
        </div>
        <div class="mb-2">
            <input 
                type="radio"
                {name}
                id="{name}-staff"
                value="staff"
                class="radio radio-lg radio-accent"
            />
            <label for="{name}-staff" class="text-lg">Staff</label>
        </div>
    </fieldset>
</div>
