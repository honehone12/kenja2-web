<script lang="ts">
    import { Lang } from "$lib";
    import { getModal, SEARCH_MODAL_ID } from "$lib/client/modal";
    import SearchModal from "$lib/components/SearchModal.svelte";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();

    export function openSearchModal() {
        getModal(SEARCH_MODAL_ID)?.showModal();
    }

    export function closeSearchModal() {
        getModal(SEARCH_MODAL_ID)?.close();
    }

    function gotoTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
</script>

<nav aria-label="dock">
    <menu class="dock">
        <li class="tooltip" data-tip={lang === Lang.Jp ? "ホーム" : "Home"}>
            <a
                href={lang === Lang.Jp ? "/?lang=ja" : "/"}
                aria-label={lang === Lang.Jp ? "ホームページ" : "Home Page"}
            >
                <svg
                    class="size-9"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    ><g
                        fill="currentColor"
                        stroke-linejoin="miter"
                        stroke-linecap="butt"
                        ><polyline
                            points="1 11 12 2 23 11"
                            fill="none"
                            stroke="currentColor"
                            stroke-miterlimit="10"
                            stroke-width="2"
                        ></polyline><path
                            d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="square"
                            stroke-miterlimit="10"
                            stroke-width="2"
                        ></path><line
                            x1="12"
                            y1="22"
                            x2="12"
                            y2="18"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="square"
                            stroke-miterlimit="10"
                            stroke-width="2"
                        ></line></g
                    ></svg
                >
            </a>
        </li>
        <!-- <li
            class="tooltip"
            data-tip={lang === Lang.Jp ? "マイリスト" : "My List"}
        >
            <a
                href={lang === Lang.Jp ? "/mylist?lang=ja" : "/mylist"}
                aria-label={lang === Lang.Jp ? "マイリスト" : "My List"}
            >
                <svg
                    class="size-9"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    ></path>
                </svg>
            </a>
        </li> -->
        <li
            class="tooltip"
            data-tip={lang === Lang.Jp
                ? "ミニサーチウィンドウ"
                : "Mini Search Window"}
        >
            <button
                aria-label={lang === Lang.Jp
                    ? "サーチウィンドウ"
                    : "Search Window"}
                onclick={openSearchModal}
            >
                <svg
                    class="size-9"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    ><g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2.5"
                        fill="none"
                        stroke="currentColor"
                        ><circle cx="11" cy="11" r="8"></circle><path
                            d="m21 21-4.3-4.3"
                        ></path></g
                    ></svg
                >
            </button>
            <SearchModal {lang} onclickClose={closeSearchModal} />
        </li>
        <li
            class="tooltip"
            data-tip={lang === Lang.Jp ? "ページのトップ" : "Top of the Page"}
        >
            <button
                aria-label={lang === Lang.Jp
                    ? "ページのトップ"
                    : "Top of the Page"}
                onclick={gotoTop}
            >
                <svg
                    class="size-9"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    ><circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="2"
                    /><path
                        fill="currentColor"
                        d="M12.7 16h-1.4v-5H9.8c-.6 0-.9-.7-.5-1.1l2.2-2.2c.3-.3.7-.3 1 0l2.2 2.2c.4.4.1 1.1-.5 1.1H12.7v5z"
                    /></svg
                >
            </button>
        </li>
    </menu>
</nav>
