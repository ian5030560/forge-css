<script lang='ts'>
    import type { HTMLAttributes } from "svelte/elements";
    import "./Overlay.css";
    
    const {class: otherClass, ...props}: Exclude<HTMLAttributes<HTMLElement>, "children"> = $props();
</script>

<div {...props} class={["overlay", otherClass]}></div>