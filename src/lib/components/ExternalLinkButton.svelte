<script lang="ts">
    interface Props {
        link: string;
        label: string;
        name: string;
    }

    let { link, label, name }: Props = $props();
</script>

<div class="text-center">
    <a href={link}>
        <button
            class="btn btn-circle btn-sm btn-accent tooltip w-34"
            aria-label={label}
            data-tip={label}
        >
            {name}
        </button>
    </a>
</div>
