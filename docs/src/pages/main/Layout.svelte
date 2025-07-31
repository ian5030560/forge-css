<script lang="ts">
    import type { Snippet } from "svelte";

    export interface LayoutProps {
        children?: Snippet;
    }

    const { children }: LayoutProps = $props();
</script>

<div class="vstack gap-4 flex-grow-1 p-4">
    {@render children?.()}
</div>
