<script lang="ts">
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
</script>

{#snippet navigateContent()}
    <ol class="nav-list px-3 pt-4 overflow-y-auto">
        {#each listData as data}
            <li class="vstack">
                <Title type={5}>{data.title}</Title>
                <ol class="nav-nest-list">
                    {#each data.items as item}
                        <li class="nav-nest-list-item text-truncate">
                            {item.title}
                        </li>
                    {/each}
                </ol>
            </li>
        {/each}
    </ol>
{/snippet}

{@render navigateContent()}
