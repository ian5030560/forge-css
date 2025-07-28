<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";

    type ButtonType = "primary" | "text";

    interface ButtonProps extends HTMLAttributes<HTMLElement> {
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
    class="button {otherClass}"
    data-button-type={buttonType || "primary"}
    {...restProps}
>
    {@render children?.()}
</svelte:element>

<style>
    .button {
        appearance: none;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 1px solid;
        border-radius: var(--radius);
        padding: var(--padding-1);
        color: var(--gray-12);
        font-size: var(--font-size-normal);
        font-weight: var(--font-weight-normal);
        cursor: pointer;
        transition: background-color var(--transition);
    }

    .button[data-button-type="primary"] {
        border-color: var(--orange-9);
        background-color: var(--orange-9);
        color: var(--orange-12);
    }

    .button[data-button-type="primary"]:hover {
        background-color: var(--orange-10);
    }

    .button[data-button-type="text"] {
        background-color: transparent;
        border-color: transparent;
        color: var(--gray-12);
        outline: none;
    }

    .button[data-button-type="text"]:hover {
        background-color: var(--gray-4);
    }

    .button[data-button-type="text"]:active {
        background-color: var(--gray-5);
    }
</style>
