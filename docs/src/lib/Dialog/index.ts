import { Dialog as BitsDialog } from "bits-ui";
import Content, {type ContentProps} from "./Content.svelte";

export default {
    Root: BitsDialog.Root,
    Trigger: BitsDialog.Trigger,
    Content
} as const;

type RootProps = BitsDialog.RootProps;
type TriggerProps = BitsDialog.TriggerProps;

export type { RootProps, TriggerProps, ContentProps };