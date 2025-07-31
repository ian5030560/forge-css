<script lang="ts">
    import BaseTitle, {
        type TitleProps as BaseTitleProps,
    } from "../../lib/Title.svelte";

    type TitleProps = BaseTitleProps;
    const {
        class: otherClass,
        children,
        type,
        ...props
    }: TitleProps = $props();

    const margins: Record<TitleProps["type"], string> = {
        1: "mb-2",
        2: "mb-2",
        3: "mb-2",
        4: "mb-1",
        5: "mb-1",
        6: "mb-1",
    };
</script>

<BaseTitle {...props} {type} class={[margins[type], otherClass]}>
    {@render children?.()}
</BaseTitle>
