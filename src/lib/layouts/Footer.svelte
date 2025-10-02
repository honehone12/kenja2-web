<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();
</script>

<footer class="footer footer-center bg-base-200 p-10 mb-15">
    <aside>
        <figure>
            <img
                src="/kenja2-logo.png"
                alt={lang === Lang.Jp
                    ? "ケンジャニメのロゴ、賢者のイラスト"
                    : "Kenjanime Logo, Illustration of Wise Old Man"}
                class="drop-shadow-sm max-w-20 mb-2"
            />
        </figure>
        <p>© Kenjanime Developer {new Date().getFullYear()}</p>
        <a href="/THIRD-PARTY-LICENSES.md" type="text/markdown; charset=utf-8">
            <p class="link link-primary">OSS licenses</p>
        </a>
    </aside>
</footer>
