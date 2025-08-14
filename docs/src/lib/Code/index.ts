import Block, { type Languages, type BlockProps } from "./Block.svelte";
import Inline, { type InlineProps } from "./Inline.svelte";

export default {
    Block,
    Inline,
} as const;

export type { Languages, BlockProps, InlineProps };