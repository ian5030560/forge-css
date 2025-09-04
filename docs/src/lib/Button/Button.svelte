<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import "./Button.css";

    export type Variant = "primary" | "text";

    export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
        variant?: Variant;
    }

    const {
        class: className,
        variant,
        children,
        ...props
    }: ButtonProps = $props();
</script>

<button
    class={["button", className]}
    data-button-type={variant || "primary"}
    {...props}
>
    {@render children?.()}
</button>
