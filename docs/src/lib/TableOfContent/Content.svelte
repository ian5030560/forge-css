<script lang="ts">
    import { getContext } from "svelte";
    import type { TableOfContentContext } from "./Root.svelte";
    import Text from "../Text.svelte";

    const context: TableOfContentContext = getContext("table-of-content");
</script>

<ul>
    {#each context.items() as item}
        <li><a href="#{item.tag}"><Text>{item.title}</Text></a></li>
    {/each}
</ul>
