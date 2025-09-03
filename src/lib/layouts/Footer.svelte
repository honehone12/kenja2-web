<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
    }

    let {lang}: Props = $props();
</script>

<footer class="footer footer-center bg-base-200 p-10 mb-15">
    <aside>
        <a href="/">
            <img
                src="/kenja2_logo.png"
                alt="{lang === Lang.Jp ? 'ケンジャのロゴ、賢者のイラスト' : 'Kenja Logo, Illustration of Wise Old Man'}"
                class="drop-shadow-sm max-w-20 mb-2"
            />
        </a>
        <p>© Kenja Developer {new Date().getFullYear()}</p>
        <a href="/THIRD-PARTY-LICENSES.md" type="text/markdown; charset=utf-8">
            <p class="link link-primary">OSS licenses</p>
        </a>
    </aside>
</footer>
