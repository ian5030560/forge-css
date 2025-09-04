<script lang="ts">
    import { setContext } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import "./Root.css";

    type UnorderedProps = HTMLAttributes<HTMLUListElement>;
    type OrderedProps = HTMLAttributes<HTMLOListElement>;

    interface CommonProps{
        noHeaded?: boolean;
    }

    export type RootProps = CommonProps & (UnorderedProps & {
        type?: "ul";
    } | OrderedProps & {
        type: "ol";
    });
    const {
        children,
        type = "ul",
        class: className,
        noHeaded,
        ...props
    }: RootProps = $props();

    setContext("list", null);

    const attrs = $derived({
        "data-list-no-headed": noHeaded ? "" : undefined,
    });
</script>

<svelte:element
    this={type}
    class={["list", className]}
    {...attrs}
    {...props}
>
    {@render children?.()}
</svelte:element>
