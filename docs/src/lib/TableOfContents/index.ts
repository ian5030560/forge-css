import type { TitleProps } from "../Title.svelte";
import Content from "./Content.svelte";
import type { RootProps } from "./Root.svelte";
import Root from "./Root.svelte";
import Title from "./Title.svelte";

export default { Root, Title, Content } as const;

export type {
    RootProps,
    TitleProps,
}