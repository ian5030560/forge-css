<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";
    import "./Input.css";

    export interface InputProps extends HTMLInputAttributes {}

    let { class: className, ...props }: InputProps = $props();
</script>

<input class={["input", className]} {...props} />
