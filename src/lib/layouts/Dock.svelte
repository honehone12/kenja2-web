<script lang="ts">
    import {SEARCH_MODAL_ID, getModal} from "$lib";
    import SearchModal from "$lib/components/SearchModal.svelte";

    function gotoTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function openModal() {
        getModal(SEARCH_MODAL_ID)?.showModal();
    }

    function closeModal() {
        getModal(SEARCH_MODAL_ID)?.close();
    }
</script>

<div class="dock">
    <div>
        <a href="/" aria-label="home">
            <svg class="size-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></line></g></svg>
        </a>
    </div>
    <div>
        <button onclick={openModal}>
            <img
                src="/favicon.png"
                alt="Kenja logo with illustration of wise man"
                class="size-10 drop-shadow-sm" 
            />
        </button>
        <SearchModal onclickClose={closeModal}/>
    </div>
    <div>
        <button aria-label="top" onclick={gotoTop}>
            <svg class="size-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path fill="currentColor" d="M12.7 16h-1.4v-5H9.8c-.6 0-.9-.7-.5-1.1l2.2-2.2c.3-.3.7-.3 1 0l2.2 2.2c.4.4.1 1.1-.5 1.1H12.7v5z"/></svg>
        </button>
    </div>
</div>
