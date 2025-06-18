<div class="flex flex-col">
    <fieldset>
        <div class="mb-2">
            <input 
                type="radio" 
                name="item-type" 
                id="all" 
                value="all" 
                checked={true} 
                class="radio radio-lg radio-accent" 
            />
            <label for="all" class="text-lg">All</label>
        </div>
        <div class="mb-2">
            <input 
                type="radio" 
                name="item-type" 
                id="anime" 
                value="anime" 
                class="radio radio-lg radio-accent" 
            />
            <label for="anime" class="text-lg">Anime</label>
        </div>
        <div>
            <input 
                type="radio" 
                name="item-type" 
                id="character" 
                value="character" 
                class="radio radio-lg radio-accent" 
            />
            <label for="character" class="text-lg">Character</label>
        </div>
    </fieldset>
</div>
