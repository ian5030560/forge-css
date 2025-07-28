<script lang="ts">
    import type { Snippet } from "svelte";
    import SearchBox from "./SearchBox.svelte";
    import Button from "./Button.svelte";
    import { Github, Menu, Moon, Sun, TableOfContents } from "@lucide/svelte";
    import Navigation from "./Navigation.svelte";
    import Offcanvas from "./Offcanvas";
    import mediaQuery from "./mediaQuery.svelte";

    interface LayoutProps {
        children: Snippet;
    }
    const { children }: LayoutProps = $props();

    let isDark = $state(false);
    let showOffcanvas = mediaQuery("(width < 576px)");

    const toggleTheme = () => {
        isDark = !isDark;
    };

    $effect(() => {
        document.body.setAttribute("data-theme", isDark ? "dark" : "light");
        return () => {
            document.body.removeAttribute("data-theme");
        };
    });
</script>

<Offcanvas.Root>
    <div class="docs-container">
        <div class="docs-header">
            <div class="hstack align-items-center gap-2">
                {#if showOffcanvas}
                    <Offcanvas.Trigger>
                        {#snippet child({ props })}
                            <Button {...props} buttonType="text">
                                <Menu />
                            </Button>
                        {/snippet}
                    </Offcanvas.Trigger>
                {/if}
                <span class="docs-logo-text">forge-css</span>
            </div>
            <div class="hstack align-items-center gap-1">
                <SearchBox />
                <Button
                    tag="a"
                    buttonType="text"
                    href="https://github.com/ian5030560/forge-css"
                    ><Github /></Button
                >
                <Button buttonType="text" onclick={toggleTheme}>
                    {#if isDark}<Moon />{:else}<Sun />{/if}
                </Button>
                <!-- <Button buttonType="text">
                    <TableOfContents />
                </Button> -->
            </div>
        </div>
        <main class="docs-body">
            {#if showOffcanvas}
                <Offcanvas.Content title="Navigation">
                    <Navigation />
                </Offcanvas.Content>
            {:else}
                <Navigation />
            {/if}
            {@render children?.()}
        </main>
    </div>
</Offcanvas.Root>

<style>
    .docs-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: var(--gray-1);
    }

    .docs-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--gray-2);
        padding: var(--padding-2);
    }

    .docs-body {
        display: flex;
        flex: 1;
        overflow-y: auto;
    }

    .docs-logo-text {
        font-weight: var(--font-weight-bolder);
        font-size: var(--font-size-large);
        color: var(--gray-12);
        user-select: none;
    }
</style>
