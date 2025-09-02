<script lang="ts">
    import { getContext, onMount } from "svelte";
    import type { TableOfContentContext } from "./Root.svelte";
    import Text from "../Text.svelte";
    import "./Content.css";
    import Title, { type TitleProps } from "../Title.svelte";
    import Seperator from "../Seperator.svelte";
    import type { HTMLAttributes } from "svelte/elements";

    export interface ContentProps
        extends Exclude<HTMLAttributes<HTMLElement>, "children"> {
        title: string;
    }
    const context: TableOfContentContext = getContext("table-of-content");

    const { title, class: otherClass, ...props }: ContentProps = $props();
    let hashLocation = $state(window.location.hash);

    onMount(() => {
        window.addEventListener("hashchange", () => {
            hashLocation = window.location.hash;
        });
    });
</script>

<div
    class={["table-of-content vstack gap-1 p-2 overflow-hidden", otherClass]}
    {...props}
>
    <Title type={5}>{title}</Title>
    <Seperator />
    <ul class="table-of-content-list overflow-y-auto m-0 p-0">
        {#each context.items() as item}
            {@const selected = hashLocation === `#${item.tag}`}

            <li class="pl-{item.type - 2} table-of-content-list-item">
                <a
                    href="#{item.tag}"
                    class="text text-truncate d-block"
                    data-text-contrast={selected ? "high" : "low"}
                >
                    {item.title}
                </a>
            </li>
        {/each}
    </ul>
</div>
