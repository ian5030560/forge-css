<script lang="ts">
    import SearchBox from "./SearchBox.svelte";
    import { MediaQuery } from "svelte/reactivity";
    import { Menu, Github, Moon, Sun } from "@lucide/svelte";
    import Offcanvas from "./lib/Offcanvas";
    import Button from "./lib/Button";
    import Navigation from "./Navigation.svelte";
    import "./Layout.css";
    import Title from "./lib/Title.svelte";
    import type { WithChildren } from "./lib/WithChildren";
    import Theme from "./lib/Theme";
    import SystemTheme from "./systemTheme.svelte";

    interface LayoutProps extends WithChildren {}
    const { children }: LayoutProps = $props();
    const md = new MediaQuery("(width <= 768px)");
    let showOffcanvas = $derived(md.current);

    const theme = new SystemTheme();
</script>

<Theme.Root
    bind:dark={theme.isDark}
    onChange={(value) => {
        theme.isDark = value;
    }}
>
    <Offcanvas.Root>
        <header class="docs-header d-flex justify-content-space-between align-items-center p-2 position-sticky top-0 left-0">
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
                <Title type={3} class="user-select-none">forge-css</Title>
            </div>
            <div class="hstack align-items-center gap-1">
                <SearchBox />
                <Button
                    tag="a"
                    buttonType="text"
                    href="https://github.com/ian5030560/forge-css"
                >
                    <Github />
                </Button>
                <Theme.Trigger>
                    {#snippet children({ onclick, value })}
                        <Button buttonType="text" {onclick}>
                            {#if value}<Moon />{:else}<Sun />{/if}
                        </Button>
                    {/snippet}
                </Theme.Trigger>
            </div>
        </header>
        {#if showOffcanvas}
            <Offcanvas.Content title="Navigation">
                <Navigation />
            </Offcanvas.Content>
        {:else}
            <aside class="docs-sidebar position-fixed overflow-hidden">
                <Navigation />
            </aside>
        {/if}
        <main class="docs-content p-4 vstack gap-3">
            {@render children?.()}
        </main>
    </Offcanvas.Root>
</Theme.Root>
