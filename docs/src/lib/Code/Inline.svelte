<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import Text from "../Text.svelte";
    import "./Inline.css";

    export type InlineProps = HTMLAttributes<HTMLElement>;

    const { class: otherClass, children, ...props }: InlineProps = $props();
</script>

<Text class={["code-inline-text", otherClass]} contrast={"low"}>
    {@render children?.()}
</Text>
