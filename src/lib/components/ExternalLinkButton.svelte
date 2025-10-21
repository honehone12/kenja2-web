<script lang="ts">
    interface Props {
        link: string;
        label: string;
        display: string;
    }

    let { link, label, display }: Props = $props();
</script>

<li class="text-center">
    <a href={link} class="tooltip" data-tip={label}>
        <button
            class="btn btn-circle btn-sm btn-accent w-34"
            aria-label={label}
        >
            {display}
        </button>
    </a>
</li>
