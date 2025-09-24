<script lang="ts">
    import { SPLITTER } from "$lib";

    interface Props {
        link: string;
        name: string;
        useExtraction?: boolean | undefined;
        label: string;
        display: string;
    }

    let { link, name, useExtraction, label, display }: Props = $props();

    function extractTitle(raw: string) {
        // be careful for ordering
        const clean = raw
            .replace("映画", " ")
            .replace("劇場版", " ")
            .replace("テレビアニメーション", " ")
            .replace("テレビアニメ", " ")
            .replace("TVアニメ", " ")
            .replace("OVA", " ")
            .replace("オリジナルビデオアニメーション", " ")
            .replace("アニメーション", " ")
            .trim();

        const split = clean.split(SPLITTER).filter((value) => value.length > 1);
        return split.at(0) ?? clean;
    }

    function fullLink() {
        return link.replace("%KENJA_LINK%", name);
    }

    function extractedLink() {
        const q = extractTitle(name);
        return link.replace("%KENJA_LINK%", q);
    }
</script>

<div class="text-center">
    <a
        href={fullLink()}
        onclick={(e) => {
            e.preventDefault();
            window.location.href = useExtraction ? extractedLink() : fullLink();
        }}
    >
        <button
            class="btn btn-circle btn-sm btn-accent tooltip w-34"
            aria-label={label}
            data-tip={label}
        >
            {display}
        </button>
    </a>
</div>
