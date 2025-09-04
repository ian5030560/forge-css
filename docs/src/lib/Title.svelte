<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import "./Title.css";
    import type { Contrast } from "./Text.svelte";

    export type TitleType = 1 | 2 | 3 | 4 | 5 | 6;
    export interface TitleProps extends HTMLAttributes<HTMLElement> {
        type: TitleType;
        contrast?: Contrast;
    }

    const {
        class: className,
        type,
        children,
        contrast = "high",
        ...props
    }: TitleProps = $props();
</script>

<span
    class={[`title-${type}`, className]}
    data-text-contrast={contrast}
    {...props}
>
    {@render children?.()}
</span>
