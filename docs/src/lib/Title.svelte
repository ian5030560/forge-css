<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import "./Title.css";

    export type TitleType = 1 | 2 | 3 | 4 | 5 | 6;
    export interface TitleProps extends HTMLAttributes<HTMLElement>{
        type: TitleType;
    }

    const {class: otherClass, type, children, ...props}: TitleProps = $props();
</script>

<span class={[`title-${type}`, otherClass]} {...props}>
    {@render children?.()}
</span>