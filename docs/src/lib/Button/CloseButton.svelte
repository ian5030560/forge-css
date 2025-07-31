<script lang='ts'>
    import { X } from "@lucide/svelte";
    import Button, { type ButtonProps } from "./Button.svelte"; 
    export type CloseButtonProps = Exclude<ButtonProps, "buttonType" | "tag" | "children">;

    const props: CloseButtonProps = $props();
</script>

<Button {...props} buttonType="text"><X/></Button>