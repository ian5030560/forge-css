<script lang="ts">
    import { getContext } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    export type ItemProps = HTMLAttributes<HTMLLIElement>;

    const { children, class: className, ...props }: ItemProps = $props();

    getContext("list");
</script>

<li class={["list-item", className]} {...props}>
    {@render children?.()}
</li>
