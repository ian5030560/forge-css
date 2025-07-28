<script lang="ts">
    interface NavListData {
        title: string;
        items: string[];
    }
    const listData: NavListData[] = [
        {
            title: "Getting Started",
            items: ["Introduction", "Usage"],
        },
        {
            title: "Layout",
            items: ["Breakpoints", "Container", "Stack"],
        },
        {
            title: "Utilities",
            items: ["Aspect-ratio", "Border", "Cursor", "Direction", "Font"],
        },
    ];
</script>

{#snippet navigateContent()}
    <ol class="nav-list overflow-y-auto">
        {#each listData as data}
            <li class="vstack">
                <span class="nav-title">{data.title}</span>
                <list class="nav-nest-list">
                    {#each data.items as item}
                        <li class="nav-nest-list-item">{item}</li>
                    {/each}
                </list>
            </li>
        {/each}
    </ol>
{/snippet}

{@render navigateContent()}

<style>
    .nav-list {
        list-style: none;
        background-color: var(--gray-2);
        padding: var(--padding-2);
        margin: 0;
    }

    .nav-nest-list {
        list-style: none;
        padding: var(--padding-1);
    }

    .nav-title {
        font-size: var(--font-size-median);
        font-weight: var(--font-weight-bold);
        color: var(--gray-12);
        user-select: none;
    }

    .nav-nest-list-item {
        padding: var(--padding-1);
        color: var(--gray-11);
        border-radius: var(--radius);
        user-select: none;
        cursor: pointer;
        transition: background-color var(--transition);
    }

    .nav-nest-list-item:hover {
        background-color: var(--orange-3);
        color: var(--orange-11);
    }

    .nav-nest-list-item:active {
        background-color: var(--orange-4);
    }
</style>
