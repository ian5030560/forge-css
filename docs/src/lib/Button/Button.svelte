<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import "./Button.css";
    
    export type ButtonType = "primary" | "text" | "link";

    export interface ButtonProps extends HTMLAttributes<HTMLElement> {
        tag?: keyof HTMLElementTagNameMap;
        buttonType?: ButtonType;
        [key: string]: any;
    }

    const {
        tag,
        class: otherClass,
        buttonType,
        children,
        ...restProps
    }: ButtonProps = $props();
</script>

<svelte:element
    this={tag || "button"}
    class={["button", otherClass]}
    data-button-type={buttonType || "primary"}
    {...restProps}
>
    {@render children?.()}
</svelte:element>
