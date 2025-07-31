<script lang="ts">
    import { Search } from "@lucide/svelte";
    import { Combobox } from "bits-ui";
    import { MediaQuery } from "svelte/reactivity";
    import Dialog from "./lib/Dialog";
    import Button from "./lib/Button";
    import Input from "./lib/Input.svelte";
    import "./SearchBox.css";

    type Item = { value: string; label: string };
    const items: Item[] = new Array(100).fill(0).map((_, index) => ({
        value: `item-${index}`,
        label: `Item ${index}`,
    }));

    let anchorElement = $state<HTMLElement>(null!);
    const xs = new MediaQuery("(width < 576px)");
</script>

{#snippet searchBox()}
    <Combobox.Root type="single" {items}>
        <div class="search-box" bind:this={anchorElement}>
            <label class="search-label" for="docs-search"><Search /></label>
            <Combobox.Input>
                {#snippet child({ props })}
                    <Input
                        {...props}
                        class="search-input"
                        type="search"
                        name="docs-search"
                        id="docs-search"
                        placeholder="Search..."
                    />
                {/snippet}
            </Combobox.Input>
            <Combobox.Portal>
                <Combobox.Content customAnchor={anchorElement} sideOffset={4}>
                    {#snippet child({ wrapperProps, props, open })}
                        {#if open}
                            <div {...wrapperProps}>
                                <div {...props} class="search-result">
                                    {#each items as item}
                                        <Combobox.Item value={item.value}>
                                            {#snippet child({ props })}
                                                <span
                                                    {...props}
                                                    class="search-result-item"
                                                >
                                                    {item.label}
                                                </span>
                                            {/snippet}
                                        </Combobox.Item>
                                    {/each}
                                </div>
                            </div>
                        {/if}
                    {/snippet}
                </Combobox.Content>
            </Combobox.Portal>
        </div>
    </Combobox.Root>
{/snippet}

{#if !xs.current}
    {@render searchBox()}
{:else}
    <Dialog.Root>
        <Dialog.Trigger>
            {#snippet child({ props })}
                <Button {...props} buttonType="link"><Search /></Button>
            {/snippet}
        </Dialog.Trigger>

        <Dialog.Content>
            {@render searchBox()}
        </Dialog.Content>
    </Dialog.Root>
{/if}
