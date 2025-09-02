<script lang="ts">

    interface Props {
        id: string;
        isStared: boolean;
        onStared: (id: string) => Promise<void>;
    }

    let {isStared, onStared}: Props = $props();

    let stared = $state(isStared);
</script>
