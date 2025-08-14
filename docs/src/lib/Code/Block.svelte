<script lang="ts">
    import { Check, Copy } from "@lucide/svelte";
    import hljs from "highlight.js";
    import "./Block.css";
    import Button from "../Button";
    import Text from "../Text.svelte";
    import type { HTMLAttributes } from "svelte/elements";

    export type Languages = "javascript" | "bash" | "html" | "json";
    export interface BlockProps
        extends Exclude<HTMLAttributes<HTMLElement>, "children"> {
        title?: string;
        code: string;
        lang?: Languages;
        copyable?: boolean;
    }
    const {
        class: otherClass,
        title,
        code,
        lang = "html",
        copyable = true,
        ...props
    }: BlockProps = $props();

    let copied = $state(false);

    const copy = () => {
        navigator.clipboard.writeText(code);
        if (!copied) {
            copied = true;
            setTimeout(() => {
                copied = false;
            }, 1000);
        }
    };

    const rendered = $derived(hljs.highlight(code, { language: lang }));
</script>

<div class={["code-block-board px-2 py-2", otherClass]} {...props}>
    {#if title}
        <Text contrast={"high"}>
            {title}
        </Text>
    {/if}
    {#if copyable}
        <Button
            buttonType="link"
            class="code-block-copy"
            data-copied={!copied ? undefined : true}
            onclick={copy}
        >
            {#if !copied}<Copy />{:else}<Check />{/if}
        </Button>
    {/if}
    <code class="code-block-text">{@html rendered.value}</code>
</div>
