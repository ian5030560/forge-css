<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";


    export interface RowProps extends HTMLAttributes<HTMLTableRowElement>{};
    const {class: otherClass, children, ...props}: RowProps = $props();

</script>

<tr class={otherClass} {...props}>{@render children?.()}</tr>