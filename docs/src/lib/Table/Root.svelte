<script lang="ts">
    import type { ClassValue, HTMLAttributes } from "svelte/elements";
    import "./Root.css";
    import type { Snippet } from "svelte";

    export interface RootProps extends HTMLAttributes<HTMLTableElement> {
        rootProps?: Exclude<HTMLAttributes<HTMLDivElement>, "children">;
        headerProps?: Exclude<HTMLAttributes<HTMLHeadElement>, "children">;
        header: Snippet;
        bodyProps?: Exclude<
            HTMLAttributes<HTMLTableSectionElement>,
            "children"
        >;
        body: Snippet;
    }

    const {
        class: className,
        headerProps,
        header,
        bodyProps,
        body,
        rootProps,
        ...props
    }: RootProps = $props();
</script>

{#snippet tableSnippet()}
    <table class={["table", className]} {...props}>
        {#if headerProps}
            {@const { class: headerClass, ...restheaderProps } = headerProps}
            <thead class={["table-header", headerClass]} {...restheaderProps}>
                {@render header?.()}
            </thead>
        {:else}
            <thead class={"table-header"}>{@render header?.()}</thead>
        {/if}

        {#if bodyProps}
            {@const { class: bodyClass, ...restbodyProps } = bodyProps}
            <tbody class={["table-body", bodyClass]} {...restbodyProps}>
                {@render body?.()}
            </tbody>
        {:else}
            <tbody class={"table-body"}>{@render body?.()}</tbody>
        {/if}
    </table>
{/snippet}

{#if rootProps}
    {@const { class: rootClass, ...restRootProps } = rootProps}
    <div class={["table-root", rootClass]} {...restRootProps}>
        {@render tableSnippet()}
    </div>
{:else}
    <div class="table-root">
        {@render tableSnippet()}
    </div>
{/if}
