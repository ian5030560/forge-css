<script lang="ts">
    import type { Snippet } from "svelte";
    import Text from "../../../lib/Text.svelte";
    import Title from "../../../lib/Title.svelte";

    export interface HeaderProps {
        title: string;
        description: Snippet;
    }
    const props: HeaderProps = $props();
</script>

<Title type={2}>{props.title}</Title>
<Text class="font-size-median" contrast={"low"}>
    {@render props.description?.()}
</Text>
