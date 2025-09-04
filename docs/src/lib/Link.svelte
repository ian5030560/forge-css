<script lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";
    import "./Link.css";
    export type LinkProps = HTMLAnchorAttributes;
    const { class: className, children, ...props }: LinkProps = $props();

</script>

<a class={["link", className]} {...props}>{@render children?.()}</a>
