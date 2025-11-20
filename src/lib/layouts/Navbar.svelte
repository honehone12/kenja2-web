<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import { Lang } from "$lib";

    interface Route {
        name: string;
        nameJapanese: string;
        path: string;
        pathJapanese: string;
    }

    const ROUTES: Route[] = [
        {
            name: "Home",
            nameJapanese: "ホーム",
            path: "/",
            pathJapanese: "/?lang=ja",
        },
        {
            name: "Character",
            nameJapanese: "キャラクター",
            path: "/recommend/buffer/character",
            pathJapanese: "/recommend/buffer/character?lang=ja",
        },
        {
            name: "Local AI",
            nameJapanese: "ローカルAI",
            path: "/ai",
            pathJapanese: "/ai?lang=ja",
        },
        {
            name: "Random",
            nameJapanese: "ランダム",
            path: "/random/buffer?item-type=all",
            pathJapanese: "/random/buffer?item-type=all&lang=ja",
        },
        {
            name: "MyList",
            nameJapanese: "マイリスト",
            path: "/mylist",
            pathJapanese: "/mylist?lang=ja",
        },
        {
            name: "About",
            nameJapanese: "アバウト",
            path: "/about",
            pathJapanese: "/about?lang=ja",
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

<header>
    <nav class="navbar bg-base-200" aria-label="navigation bar">
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
                <menu
                    class="menu menu-lg dropdown-content bg-base-300 rounded-box z-1 w-52 mt-4 p-3"
                >
                    {#each ROUTES as route, i (i)}
                        <li class="my-2">
                            <a
                                tabindex="0"
                                href={lang === Lang.Jp
                                    ? route.pathJapanese
                                    : route.path}
                            >
                                <span class="link font-medium">
                                    {lang === Lang.Jp
                                        ? route.nameJapanese
                                        : route.name}
                                </span>
                            </a>
                        </li>
                    {/each}
                </menu>
            </div>
        </div>
        <div class="navbar-center hidden md:flex">
            <menu class="menu menu-lg menu-horizontal px-1">
                {#each ROUTES as route, i (i)}
                    <li>
                        <a
                            tabindex="0"
                            href={lang === Lang.Jp
                                ? route.pathJapanese
                                : route.path}
                        >
                            <span class="font-medium">
                                {lang === Lang.Jp
                                    ? route.nameJapanese
                                    : route.name}
                            </span>
                        </a>
                    </li>
                {/each}
            </menu>
        </div>
        <div class="navbar-end">
            <menu class="menu menu-lg menu-horizontal px-1 mr-4">
                <li>
                    <a
                        tabindex="0"
                        href={otherLangUrl()}
                        onclick={(e) => {
                            e.preventDefault();
                            document.documentElement.setAttribute(
                                "lang",
                                lang === Lang.Jp ? "en" : "ja",
                            );
                            goto(otherLangUrl(), { invalidateAll: true });
                        }}
                    >
                        <span class="font-medium">{otherLang()}</span>
                    </a>
                </li>
            </menu>
        </div>
    </nav>
</header>
