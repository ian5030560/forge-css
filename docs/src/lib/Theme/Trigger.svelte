<script lang="ts">
    import { getContext } from "svelte";
    import type { WithChildren } from "../WithChildren";
    import type { ThemeContext } from "./Root.svelte";

    export interface TriggerProps
        extends WithChildren<[{ onclick: () => void, value: boolean }]> {}

    const { children }: TriggerProps = $props();
    const context = getContext<ThemeContext>("theme-context");

    const toggle = () => {
        context.set(!context.get());
    };
</script>

{@render children?.({ onclick: toggle, value: context.get() })}
