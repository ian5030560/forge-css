import Content, { type ContentProps } from "./Content.svelte";
import { Dialog } from "bits-ui";

export default {
    Content,
    Root: Dialog.Root,
    Trigger: Dialog.Trigger
} as const;

type RootProps = Dialog.RootProps;
type TriggerProps = Dialog.TriggerProps;

export type { ContentProps, RootProps, TriggerProps };