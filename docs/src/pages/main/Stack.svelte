<script lang="ts">
    import Code from "../../lib/Code";
    import TableOfContents from "../../lib/TableOfContents";
    import Text from "../../lib/Text.svelte";
    import Title from "../../lib/Title.svelte";
    import Example from "./components/Example.svelte";
    import Header from "./components/Header.svelte";
</script>

<Header title={"Stack"}>
    {#snippet description()}
        Stack layouts components in vertical or horizontal direction.
    {/snippet}
</Header>

<TableOfContents.Title linkTag={"horizontal"} type={3} content={"Horizontal"} />
<TableOfContents.Title
    linkTag={"horizontal-usage"}
    type={4}
    content={"Usage"}
/>
<Code.Block copyable={false} code={`<element class='hstack'></element>`}
></Code.Block>
<TableOfContents.Title
    linkTag={"horizontal-example"}
    type={5}
    content={"Example"}
/>
<Example
    code={`<div class="hstack gap-1">
    <div data-example-block>Item 1</div>
    <div data-example-block>Item 2</div>
    <div data-example-block>Item 3</div>
</div>
`}
/>

<TableOfContents.Title linkTag={"vertical"} type={3} content={"Vertical"} />
<TableOfContents.Title
    linkTag={"vertical-usage"}
    type={4}
    content={"Usage"}
/>
<Code.Block copyable={false} code={`<element class='vstack'></element>`}
></Code.Block>
<TableOfContents.Title
    linkTag={"vertical-example"}
    type={5}
    content={"Example"}
/>
<Example
    code={`<div class="vstack gap-1">
    <div data-example-block>Item 1</div>
    <div data-example-block>Item 2</div>
    <div data-example-block>Item 3</div>
</div>
`}
/>

<TableOfContents.Title linkTag={"configuration"} type={3} content={"Configuration"} />
<Code.Block copyable={false} lang={"json"} code={`{
    "stack": {
        "responsive": boolean (true)
        "horizontal": {
            "responsive": boolean (true)
        },
        "vertical": {
            "responsive": boolean (true)
        }
    }
}`} />