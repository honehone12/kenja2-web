<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import { Lang } from "$lib";

    interface Route {
        name: string;
        jpName: string;
        path: string;
        jpPath: string;
    }

    const ROUTES: Route[] = [
        {
            name: "Home",
            jpName: "ホーム",
            path: "/",
            jpPath: "/?lang=ja",
        },
        {
            name: "Latest",
            jpName: "最新",
            path: "/latest",
            jpPath: "/latest?lang=ja",
        },
        {
            name: "Random",
            jpName: "ランダム",
            path: "/random?item-type=all",
            jpPath: "/random?item-type=all&lang=ja",
        },
        {
            name: "MyList",
            jpName: "マイリスト",
            path: "/mylist",
            jpPath: "/mylist?lang=ja",
        },
        {
            name: "About",
            jpName: "アバウト",
            path: "/about",
            jpPath: "/about?lang=ja",
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
        const u = new URL(page.url);
        const t = "lang";
        let q = u.searchParams;

        if (lang === Lang.Jp) {
            q.delete("lang");
        } else {
            let l = "ja";
            q.set(t, l);
        }

        return u.toString();
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
                        <a
                            tabindex="0"
                            href={lang === Lang.Jp ? route.jpPath : route.path}
                        >
                            <span class="link font-medium">
                                {lang === Lang.Jp ? route.jpName : route.name}
                            </span>
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
                    <a
                        tabindex="0"
                        href={lang === Lang.Jp ? route.jpPath : route.path}
                    >
                        <span class="font-medium">
                            {lang === Lang.Jp ? route.jpName : route.name}
                        </span>
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
                        goto(otherLangUrl(), { invalidateAll: true });
                    }}
                >
                    <span class="font-medium">{otherLang()}</span>
                </a>
            </li>
        </ul>
    </div>
</div>
