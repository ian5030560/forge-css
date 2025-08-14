<script lang="ts">
    import type { Action } from "svelte/action";
    import Title from "./lib/Title.svelte";
    import "./Navigation.css";

    interface NavItemData {
        title: string;
        path: string;
    }

    interface NavListData {
        title: string;
        items: NavItemData[];
    }
    const listData: NavListData[] = [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    path: "/",
                },
                {
                    title: "Download",
                    path: "/download",
                },
            ],
        },
        {
            title: "Layout",
            items: [
                {
                    title: "Breakpoints",
                    path: "/breakpoints",
                },
                {
                    title: "Containers",
                    path: "/containers",
                },
                {
                    title: "Stack",
                    path: "/stack",
                },
            ],
        },
        {
            title: "Utilities",
            items: [
                {
                    title: "Aspect-ratio",
                    path: "/aspect-ratio",
                },
                {
                    title: "Border",
                    path: "/border",
                },
                {
                    title: "Cursor",
                    path: "/cursor",
                },
                {
                    title: "Direction",
                    path: "/direction",
                },
                {
                    title: "Font",
                    path: "/font",
                },
            ],
        },
    ];

    const isActive: Action<HTMLElement, string> = (node, path) => {
        const active = window.location.pathname === path;
        if (active) {
            node.classList.add("active");
        }
        else{
            node.classList.remove("active");
        }
    }
</script>

{#snippet navigateContent()}
    <ol class="nav-list px-3 pt-3 pb-1 h-100 overflow-auto m-0">
        {#each listData as data}
            <li class="vstack">
                <Title type={5} class="user-select-none text-truncate"
                    >{data.title}</Title
                >
                <ol class="nav-nest-list">
                    {#each data.items as item}
                        <li class="nav-nest-list-item" use:isActive={item.path}>
                            <a class="text-truncate" href={item.path}>
                                {item.title}
                            </a>
                        </li>
                    {/each}
                </ol>
            </li>
        {/each}
    </ol>
{/snippet}

{@render navigateContent()}
