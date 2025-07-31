<script lang="ts">
    import type { Snippet } from "svelte";
    import SearchBox from "./SearchBox.svelte";
    import { MediaQuery } from "svelte/reactivity";
    import { Menu, Github, Moon, Sun } from "@lucide/svelte";
    import Offcanvas from "./lib/Offcanvas";
    import Button from "./lib/Button";
    import Navigation from "./Navigation.svelte";
    import "./Layout.css";
    import Title from "./lib/Title.svelte";

    interface LayoutProps {
        children: Snippet;
    }
    const { children }: LayoutProps = $props();

    let isDark = $state(false);
    const md = new MediaQuery("(width <= 768px)");
    let showOffcanvas = $derived(md.current);

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
                <Title type={3} class="user-select-none">forge-css</Title>
            </div>
            <div class="hstack align-items-center gap-1">
                <SearchBox />
                <Button
                    tag="a"
                    buttonType="text"
                    href="https://github.com/ian5030560/forge-css"
                    ><Github />
                </Button>
                <Button buttonType="text" onclick={toggleTheme}>
                    {#if isDark}<Moon />{:else}<Sun />{/if}
                </Button>
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
