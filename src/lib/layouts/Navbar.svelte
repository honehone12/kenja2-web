<script lang="ts">
    import { page } from "$app/state";
    import { Lang } from "$lib";

    interface Route {
        name: string;
        path: string;
    }

    const ROUTES: Route[] = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Latest",
            path: "/latest",
        },
        {
            name: "Random",
            path: "/random?item-type=all",
        },
        {
            name: "MyList",
            path: "/mylist",
        },
        {
            name: "About",
            path: "about",
        },
    ];

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();

    function otherLang() {
        return lang === Lang.Jp ? "EN" : "JP";
    }

    function otherLangUrl() {
        const u = page.url;
        let q = u.searchParams;
        let l = lang === Lang.Jp ? "en" : "ja";
        if (q.has("lang")) {
            q.set("lang", l);
        } else {
            q.append("lang", l);
        }
        return u.toString();
    }

    function sameLangUrl(url: string, lang: Lang) {
        return lang === Lang.Jp ? url + "?lang=ja" : url;
    }
</script>

<div class="navbar bg-base-200">
    <div class="navbar-start">
        <div class="dropdown md:hidden">
            <div
                tabindex="0"
                role="button"
                aria-label="menu"
                class="btn btn-ghost"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-9"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6 h16 M4 12 h16 m-16 6 h16"
                    /></svg
                >
            </div>
            <ul
                class="menu menu-lg dropdown-content bg-base-300 rounded-box z-1 w-52 mt-4 p-3"
            >
                {#each ROUTES as route, i (i)}
                    <li class="my-2">
                        <a tabindex="0" href={sameLangUrl(route.path, lang)}>
                            <span class="link font-medium">{route.name}</span>
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    <div class="navbar-center hidden md:flex">
        <ul class="menu menu-lg menu-horizontal px-1">
            {#each ROUTES as route, i (i)}
                <li>
                    <a tabindex="0" href={sameLangUrl(route.path, lang)}>
                        <span class="font-medium">{route.name}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="navbar-end">
        <ul class="menu menu-lg menu-horizontal px-1 mr-4">
            <li>
                <a
                    tabindex="0"
                    href={otherLangUrl()}
                    onclick={(e) => {
                        e.preventDefault();
                        window.location.href = otherLangUrl();
                    }}><span class="font-medium">{otherLang()}</span></a
                >
            </li>
        </ul>
    </div>
</div>
