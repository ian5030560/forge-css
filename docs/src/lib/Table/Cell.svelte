<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import "./Cell.css";
    
    export interface CellProps extends HTMLAttributes<HTMLTableCellElement> {
        header?: boolean;
        scope?: "row" | "col";
    }

    const {
        class: otherClass,
        header = false,
        scope = "row",
        children,
        ...props
    }: CellProps = $props();
</script>

{#if header}
    <th class={["table-cell", otherClass]} {scope} {...props}>
        {@render children?.()}
    </th>
{:else}
    <td class={["table-cell", otherClass]} {...props}>
        {@render children?.()}
    </td>
{/if}
