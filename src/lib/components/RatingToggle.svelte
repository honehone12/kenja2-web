<script lang="ts">
    'use strict';

    interface Props {
        isHentai: boolean;
    }

    let {isHentai = $bindable()}: Props = $props();

    let toggleText = $derived(isHentai ? 'Hentai' : 'Normal');
    let toggleColor = $derived(isHentai ? 'text-secondary' : 'text-neutral-content');
</script>

<div class="mt-10 ml-4">
    <label for="rating">
        <span class="font-mono text-lg {toggleColor} mr-2">
            {toggleText}
        </span>
        <input 
            type="checkbox" 
            name="rating"
            value="hentai"
            id="rating"
            class="toggle toggle-secondary mr-2"
            bind:checked={isHentai}
        />
        {#if isHentai}
            <div class="badge badge-dash badge-secondary text-sm">
                <p>I am over 18 years old.</p>
            </div>
        {/if}
    </label>
</div>