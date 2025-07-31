<script lang="ts">
    import Text from "../../lib/Text.svelte";
    import Title from "./Title.svelte";
    
    export interface HeaderProps{
        title: string;
        description: string;
    }
    const props: HeaderProps = $props();
</script>

<div class="vstack">
    <Title type={3}>{props.title}</Title>
    <Text contrast={"low"}>{props.description}</Text>
</div>
