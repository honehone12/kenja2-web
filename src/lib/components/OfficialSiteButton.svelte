<script lang="ts">
    interface Props {
        url: string | undefined;
    }

    let {url}: Props = $props();

    function forceHttps() {
        if (!url) {
            return '';
        }
        else if (url.startsWith('https:')) {
            return url;
        } else if (url.startsWith('http:')) {
            const newUrl = url.replace('http:', 'https:');
            return newUrl;
        } else {
            return '';
        }
    }
</script>

{#if url}
    <a href={forceHttps()}>
        <button 
            class="btn btn-sm btn-primary btn-circle w-40 tooltip"
            data-tip="Go to Official Site"
        >
            Official Site
        </button>
    </a>
{/if}
