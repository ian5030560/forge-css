<script lang="ts">
    import type { WithChildren } from "../WithChildren";
    import { setContext } from "svelte";

    export interface RootProps extends WithChildren {
        dark?: boolean;
        onChange?: (value: boolean) => void;
    }

    let { children, dark = $bindable(false), onChange }: RootProps = $props();

    export interface ThemeContext {
        set: (value: boolean) => void;
        get: () => boolean;
    }

    setContext<ThemeContext>("theme-context", {
        set: (value: boolean) => {
            dark = value;
            onChange?.(value);
        },
        get: () => dark,
    });

    $effect(() => {
        document.body.setAttribute("data-theme", dark ? "dark" : "light");
        return () => {
            document.body.removeAttribute("data-theme");
        };
    });
</script>

{@render children?.()}
