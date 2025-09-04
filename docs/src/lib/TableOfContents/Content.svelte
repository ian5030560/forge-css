<script lang="ts">
    import { getContext, onMount } from "svelte";
    import type {
        TableOfContentContext,
        TableOfContentItem,
    } from "./Root.svelte";
    import Text from "../Text.svelte";
    import "./Content.css";
    import Title, { type TitleProps } from "../Title.svelte";
    import Seperator from "../Seperator.svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import List from "../List";
    import Root from "./Root.svelte";

    export interface ContentProps
        extends Exclude<HTMLAttributes<HTMLElement>, "children"> {
        title: string;
    }
    const context: TableOfContentContext = getContext("table-of-content");

    const { title, class: className, ...props }: ContentProps = $props();
    let hashLocation = $state(window.location.hash);

    onMount(() => {
        window.addEventListener("hashchange", () => {
            hashLocation = window.location.hash;
        });
    });
</script>

{#snippet nestItem(tag: string, title: string, level: number)}
    {#if level <= 0}
        {@const selected = hashLocation === `#${tag}`}
        <a
            href="#{tag}"
            class="text text-truncate d-block"
            data-text-contrast={selected ? "high" : "low"}
        >
            {title}
        </a>
    {:else}
        <List.Root noHeaded={true}>
            <List.Item class="table-of-content-item">
                {@render nestItem(tag, title, level - 1)}
            </List.Item>
        </List.Root>
    {/if}
{/snippet}

<div
    class={["table-of-content vstack gap-1 p-2 overflow-hidden", className]}
    {...props}
>
    <Title type={5}>{title}</Title>
    <Seperator />
    <List.Root class="overflow-y-auto" noHeaded={true}>
        {#each context.items() as item}
            <List.Item class="table-of-content-item">
                {@render nestItem(item.tag, item.title, item.type - 3)}
            </List.Item>
        {/each}
    </List.Root>
</div>
