<script lang="ts">
    import { onDestroy, onMount, setContext } from "svelte";
    import type { TitleType } from "../Title.svelte";
    import type { WithChildren } from "../WithChildren";

    export type TableOfContentItem = {
        title: string;
        tag: string;
        type: TitleType;
    };

    export interface TableOfContentContext {
        join: (title: string, tag: string, type: TitleType) => void;
        items: () => TableOfContentItem[];
    }

    let items: TableOfContentItem[] = $state([]);

    const context = setContext<TableOfContentContext>("table-of-content", {
        join: (title, tag, type) => {
            const item = $state({ title, tag, type });

            onMount(() => {
                items.push(item);
            });

            onDestroy(() => {
                items.splice(items.indexOf(item), 1);
            });
        },
        items: () => items,
    });

    export type RootProps = WithChildren;
    const { children }: RootProps = $props();
</script>

{@render children?.()}
