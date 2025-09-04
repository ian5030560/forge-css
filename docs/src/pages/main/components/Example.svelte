<script lang="ts">
    import type { Languages } from "../../../lib/Code";
    import Code from "../../../lib/Code";
    import "./Example.css";

    export interface ExampleProps {
        code: string;
        lang?: Languages;
        copyable?: boolean;
        title?: string;
        boardClass?: string;
    }

    const { code, lang, copyable, title, boardClass }: ExampleProps = $props();
</script>

<div class="example vstack">
    <div class={["example-board", "overflow-auto", boardClass]}>
        {@html code}
    </div>
    <Code.Block {code} {lang} {copyable} {title} />
</div>
