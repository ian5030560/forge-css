<script lang="ts">
    import SearchBox from "./SearchBox.svelte";
    import { MediaQuery } from "svelte/reactivity";
    import {
        Menu,
        Github,
        Moon,
        Sun,
        TableOfContents as TableOfContentsIcon,
    } from "@lucide/svelte";
    import Offcanvas from "./lib/Offcanvas";
    import Button from "./lib/Button";
    import Navigation from "./Navigation.svelte";
    import "./Layout.css";
    import Title from "./lib/Title.svelte";
    import type { WithChildren } from "./lib/WithChildren";
    import Theme from "./lib/Theme";
    import SystemTheme from "./systemTheme.svelte";
    import TableOfContents from "./lib/TableOfContents";
    import { Popover } from "bits-ui";
    import Link from "./lib/Link.svelte";

    interface LayoutProps extends WithChildren {}
    const { children }: LayoutProps = $props();
    const md = new MediaQuery("(width <= 768px)");

    const theme = new SystemTheme();

    let headerElement: HTMLElement | null = $state(null);
</script>

{#snippet tableOfContent(md: boolean)}
    {#if md}
        <Popover.Portal>
            <Popover.Content customAnchor={headerElement} align="end">
                <TableOfContents.Content title={"Table of Contents"} />
            </Popover.Content>
        </Popover.Portal>
    {:else}
        <aside class="docs-table-of-content position-fixed">
            <TableOfContents.Content title={"Table of Contents"} />
        </aside>
    {/if}
{/snippet}

{#snippet navigation(md: boolean)}
    {#if md}
        <Offcanvas.Content title="Navigation">
            <Navigation />
        </Offcanvas.Content>
    {:else}
        <aside class="docs-sidebar position-fixed overflow-hidden">
            <Navigation />
        </aside>
    {/if}
{/snippet}

<Theme.Root
    bind:dark={theme.isDark}
    onChange={(value) => {
        theme.isDark = value;
    }}
>
    <Offcanvas.Root>
        <TableOfContents.Root>
            <Popover.Root>
                <header
                    bind:this={headerElement}
                    class="docs-header d-flex justify-content-space-between align-items-center p-2 position-sticky top-0 left-0"
                >
                    <div class="hstack align-items-center gap-2">
                        {#if md.current}
                            <Offcanvas.Trigger>
                                {#snippet child({ props })}
                                    <Button
                                        {...props}
                                        variant="text"
                                        class="docs-sidebar-trigger"
                                    >
                                        <Menu />
                                    </Button>
                                {/snippet}
                            </Offcanvas.Trigger>
                        {/if}
                        <Title type={3} class="user-select-none">
                            forge-css
                        </Title>
                    </div>
                    <div class="hstack align-items-center gap-1">
                        <SearchBox />

                        <Button variant="text">
                            <Link
                                href="https://github.com/ian5030560/forge-css"
                            >
                                <Github />
                            </Link>
                        </Button>
                        <Theme.Trigger>
                            {#snippet children({ onclick, value })}
                                <Button variant="text" {onclick}>
                                    {#if value}<Moon />{:else}<Sun />{/if}
                                </Button>
                            {/snippet}
                        </Theme.Trigger>
                        {#if md.current}
                            <Popover.Trigger>
                                {#snippet child({ props })}
                                    <Button variant="text" {...props}>
                                        <TableOfContentsIcon />
                                    </Button>
                                {/snippet}
                            </Popover.Trigger>
                        {/if}
                    </div>
                </header>
                {@render navigation(md.current)}
                <main class="docs-content vstack gap-3 p-4">
                    {@render children?.()}
                </main>
                {@render tableOfContent(md.current)}
            </Popover.Root>
        </TableOfContents.Root>
    </Offcanvas.Root>
</Theme.Root>
