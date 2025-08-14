<script lang="ts">
    import Text from "../../lib/Text.svelte";
    import Title from "../../lib/Title.svelte";

    export interface HeaderProps {
        title: string;
        description: string;
    }
    const props: HeaderProps = $props();
</script>

<Title type={3}>{props.title}</Title>
<Text class="font-size-median" contrast={"low"}>
    {props.description}
</Text>
