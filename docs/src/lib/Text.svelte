<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import "./Text.css";

    export type Contrast = "low" | "high";

    export interface TextProps extends HTMLAttributes<HTMLElement>{
        contrast?: Contrast;
    }

    const {children, class: className, contrast = "high", ...props}: TextProps = $props();
</script>

<span class={["text", className]} data-text-contrast={contrast} {...props}>
    {@render children?.()}
</span>