<script lang="ts">
    interface Props {
        link: string;
        label: string;
        display: string;
    }

    let { link, label, display }: Props = $props();
</script>

<li class="text-center">
    <a href={link}>
        <button
            class="btn btn-circle btn-sm btn-accent tooltip w-34"
            aria-label={label}
            data-tip={label}
        >
            {display}
        </button>
    </a>
</li>
