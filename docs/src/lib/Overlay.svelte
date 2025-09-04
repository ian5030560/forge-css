<script lang='ts'>
    import type { HTMLAttributes } from "svelte/elements";
    import "./Overlay.css";
    
    const {class: className, ...props}: Exclude<HTMLAttributes<HTMLElement>, "children"> = $props();
</script>

<div {...props} class={["overlay", className]}></div>