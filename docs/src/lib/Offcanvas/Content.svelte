<script lang="ts">
    import { Dialog } from "bits-ui";
    import { X } from "@lucide/svelte";
    import type { Snippet } from "svelte";
    import Button from "../Button.svelte";

    export interface ContentProps {
        title: string;
        children: Snippet;
    }

    let {title, children}: ContentProps = $props();
</script>

<Dialog.Portal>
    <Dialog.Overlay>
        {#snippet child({ props })}
            <div {...props} class="canvas-overlay"></div>
        {/snippet}
    </Dialog.Overlay>
    <Dialog.Content>
        {#snippet child({ props })}
            <div {...props} class="canvas-content">
                <Dialog.Title
                    class="d-flex justify-content-space-between align-items-center"
                >
                    <span class="canvas-content-title">{title}</span>
                    <Dialog.Close class="canvas-content-close">
                        {#snippet child({ props })}
                            <Button {...props} buttonType="text"><X /></Button>
                        {/snippet}
                    </Dialog.Close>
                </Dialog.Title>
                <div class="canvas-seperator"></div>
                {@render children?.()}
            </div>
        {/snippet}
    </Dialog.Content>
</Dialog.Portal>

<style>
    .canvas-overlay {
        position: fixed;
        inset: 0;
        z-index: 50;
        background-color: var(--gray-1);
        opacity: 0.7;
    }

    .canvas-seperator{
        width: 100%;
        height: 1px;
        background-color: var(--gray-6);
    }

    .canvas-content {
        padding: var(--padding-2);
        display: flex;
        flex-direction: column;
        z-index: 50;
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--gray-2);
        gap: var(--gap-1);
    }

    .canvas-content-title {
        font-size: var(--font-size-normal);
        font-weight: var(--font-weight-bold);
        color: var(--gray-12);
        user-select: none;
    }

    .canvas-content-close {
        color: var(--gray-12);
        cursor: pointer;
        outline: 2px solid var(--gray-7);
    }
</style>
