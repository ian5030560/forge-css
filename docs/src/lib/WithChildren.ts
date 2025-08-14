import { type Snippet } from "svelte";

export interface WithChildren<T extends unknown[] = []> {
    children: Snippet<T>;
}