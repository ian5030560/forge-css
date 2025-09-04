<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";


    export interface RowProps extends HTMLAttributes<HTMLTableRowElement>{};
    const {class: className, children, ...props}: RowProps = $props();

</script>

<tr class={className} {...props}>{@render children?.()}</tr>