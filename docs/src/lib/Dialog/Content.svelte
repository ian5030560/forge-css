<script lang="ts">
    import { Dialog } from "bits-ui";
    import Overlay from "../Overlay.svelte";
    import Seperator from "../Seperator.svelte";
    import { CloseButton } from "../Button";
    import Title from "../Title.svelte";
    import "./Content.css";
    import type { WithChildren } from "../WithChildren";
    
    export interface ContentProps extends WithChildren{
        title?: string;
    }

    let { title, children }: ContentProps = $props();
</script>

<Dialog.Portal>
    <Dialog.Overlay>
        {#snippet child({ props })}<Overlay {...props} />{/snippet}
    </Dialog.Overlay>

    <Dialog.Content>
        {#snippet child({ props })}
            <div {...props} class="dialog-content">
                <Dialog.Title class="d-flex justify-content-space-between align-items-center">
                    {#if title}
                        <Title type={4} class="user-select-none">{title}</Title>
                    {/if}
                    <Dialog.Close>
                        {#snippet child({ props })}
                            <CloseButton {...props} />
                        {/snippet}
                    </Dialog.Close>
                </Dialog.Title>
                <Seperator />
                {@render children?.()}
            </div>
        {/snippet}
    </Dialog.Content>
</Dialog.Portal>