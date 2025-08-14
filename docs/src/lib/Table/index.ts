import Cell, { type CellProps } from "./Cell.svelte";
import Row, { type RowProps } from "./Row.svelte";
import Root, { type RootProps } from "./Root.svelte";

export default {
    Root,
    Row,
    Cell
} as const;

export type { CellProps, RowProps, RootProps };