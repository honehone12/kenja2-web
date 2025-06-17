<script lang="ts">
    import type { QueryResult } from "$lib/documents/queries";

    'use strict';

    interface Props {
        buffer: Promise<QueryResult>
    }

    let {buffer}: Props = $props();
</script>