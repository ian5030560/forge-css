<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";
    import "./Input.css";
    
    export interface InputProps extends HTMLInputAttributes {}

    let { class: otherClass, ...props }: InputProps = $props();
</script>

<input class={["input", otherClass]} {...props} />
