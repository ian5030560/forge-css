<script lang="ts">
    import { Search } from "@lucide/svelte";
    import { Combobox, Dialog } from "bits-ui";
    import { MediaQuery } from "svelte/reactivity";
    import Button from "./Button.svelte";
    import mediaQuery from "./mediaQuery.svelte";

    type Item = { value: string; label: string };
    const items: Item[] = new Array(100).fill(0).map((_, index) => ({
        value: `item-${index}`,
        label: `Item ${index}`,
    }));

    let anchorElement = $state<HTMLElement>(null!);
    const queryMatch = mediaQuery("(width < 576px)");
</script>

{#snippet inputSnippet(props?: Record<string, unknown>)}
    <input
        {...props}
        class="search-input"
        type="search"
        name="docs-search"
        id="docs-search"
        placeholder="Search..."
    />
{/snippet}

{#if queryMatch}
    <Button buttonType="text">
        <Search />
    </Button>
{:else}
    <Combobox.Root type="single" {items}>
        <div class="search-box" bind:this={anchorElement}>
            <label class="search-label" for="docs-search">
                <Search />
            </label>
            <Combobox.Input child={inputSnippet} />
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
{/if}

<style>
    .search-box {
        display: flex;
        align-items: center;
        padding: var(--padding-1);
        border-radius: var(--radius);
        border: 1px solid var(--gray-7);
        gap: var(--gap-1);
    }

    .search-label {
        color: var(--gray-12);
        user-select: none;
    }

    .search-input {
        font-size: var(--font-size-normal);
        font-weight: var(--font-weight-normal);
        background-color: var(--gray-2);
        color: var(--gray-12);
        border: none;
        outline: none;
    }

    .search-box:has(.search-input:focus) {
        outline: 2px solid var(--orange-9);
    }

    .search-result {
        max-height: 50vh;
        overflow-y: auto !important;
        background-color: var(--gray-2);
        border-radius: var(--radius);
        border: 2px solid var(--orange-7);
    }

    .search-result-item {
        padding: var(--padding-2);
        color: var(--gray-12);
        cursor: pointer;
        transition: background-color var(--transition);
    }

    .search-result-item:hover {
        color: var(--orange-12);
        background-color: var(--orange-4);
    }
    .search-result-item:active {
        background-color: var(--orange-5);
    }
</style>
