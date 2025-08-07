<div class="flex flex-col">
    <fieldset>
        <div class="mb-2">
            <input 
                type="radio"
                name="vector"
                id="vector-text"
                value="text"
                checked={true}
                class="radio radio-lg radio-accent"
            />
            <label for="vector-text" class="text-lg">Text</label>
        </div>
        <div class="mb-2">
            <input 
                type="radio"
                name="vector"
                id="vector-image"
                value="image"
                class="radio radio-lg radio-accent"
            />
            <label for="vector-image" class="text-lg">Image</label>
        </div>
    </fieldset>
</div>
