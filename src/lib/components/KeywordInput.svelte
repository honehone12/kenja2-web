<script lang="ts">
    'use strict';

    import {MAX_KW_LEN} from "$lib";
</script>

<div class="join">
    <label 
        for="keyword" 
        class="join-item input input-lg md:w-xl lg:w-3xl"
    >
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
        <input 
            type="text"
            name="keyword" 
            required
            maxlength={MAX_KW_LEN}
            placeholder="Enter Keywords"
            id="keyword"
        > 
    </label>
    <button
        type="submit" 
        class="join-item btn btn-accent btn-lg"
    >
        Search
    </button>
</div>