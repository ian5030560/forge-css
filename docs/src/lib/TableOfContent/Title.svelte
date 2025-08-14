<script lang="ts">
    import { getContext } from "svelte";
    import type { TableOfContentContext } from "./Root.svelte";
    import BaseTitle, {
        type TitleProps as BaseTitleProps,
    } from "../Title.svelte";

    export interface TitleProps extends Exclude<BaseTitleProps, "id" | "children"> {
        linkTag: string;
        content: string;
    }

    const context: TableOfContentContext = getContext("table-of-content");

    const { linkTag, content, ...props }: TitleProps = $props();
    context.join(content, linkTag, props.type);
</script>

<BaseTitle {...props} id={linkTag}>{content}</BaseTitle>
