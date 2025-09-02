<script lang="ts">
    import { getContext } from "svelte";
    import type { TableOfContentContext } from "./Root.svelte";
    import BaseTitle, {
        type TitleProps as BaseTitleProps,
        type TitleType,
    } from "../Title.svelte";

    export interface TitleProps extends Exclude<BaseTitleProps, "id" | "children"> {
        linkTag: string;
        content: string;
        type: Exclude<TitleType, 1 | 2>;
    }

    const context: TableOfContentContext = getContext("table-of-content");

    const { linkTag, content, class: otherClass, ...props }: TitleProps = $props();
    context.join(content, linkTag, props.type);
</script>

<BaseTitle {...props} id={linkTag}>{content}</BaseTitle>
