<script lang="ts">
    import Header from "./components/Header.svelte";
    import Table from "../../lib/Table";
    import Code from "../../lib/Code";
    import TableOfContents from "../../lib/TableOfContents";
    import units from "../units";

    type BreakPointsData = {
        name: string;
        class: string;
        width: string;
    };
    const breakpointsList: BreakPointsData[] = [
        { name: "Extra small", class: "xs", width: "<576px" },
        { name: "Small", class: "sm", width: "≥576px" },
        { name: "Medium", class: "md", width: "≥768px" },
        { name: "Large", class: "lg", width: "≥992px" },
        { name: "Extra large", class: "xlg", width: "≥1200px" },
        { name: "Extreme Extra large", class: "xxlg", width: "≥1400px" },
    ];
</script>

<Header title={"Breakpoints"}>
    {#snippet description()}
        The breakpoints determines the responsive layout when the screen width changes acrosss devices.
    {/snippet}
</Header>

<TableOfContents.Title linkTag={"points"} type={3} content={"Points"}/>
<Table.Root>
    {#snippet header()}
        <Table.Row>
            <Table.Cell header={true} scope="col" class="text-align-left">Name</Table.Cell>
            <Table.Cell header={true} scope="col" class="text-align-left">Class name</Table.Cell>
            <Table.Cell header={true} scope="col" class="text-align-left">Screen width</Table.Cell>
        </Table.Row>
    {/snippet}
    {#snippet body()}
        {#each breakpointsList as data}
            <Table.Row>
                <Table.Cell header={true} class="text-align-left">{data.name}</Table.Cell>
                <Table.Cell class="text-align-left">
                    <Code.Inline>{data.class}</Code.Inline>
                </Table.Cell>
                <Table.Cell class="text-align-left">{data.width}</Table.Cell>
            </Table.Row>
        {/each}
    {/snippet}
</Table.Root>

<TableOfContents.Title linkTag={"configuration"} type={3} content={"Configuration"}/>
<Code.Block copyable={false} lang={"json"} code={`{
    "break-points": {
        "xs": ${units["length"].name} | ${units["length-percentage"].name} | ${units["calc()"].name} (100px),
        "sm": ${units["length"].name} | ${units["length-percentage"].name} | ${units["calc()"].name} (576px),
        "md": ${units["length"].name} | ${units["length-percentage"].name} | ${units["calc()"].name} (768px),
        "lg": ${units["length"].name} | ${units["length-percentage"].name} | ${units["calc()"].name} (992px),
        "xlg": ${units["length"].name} | ${units["length-percentage"].name} | ${units["calc()"].name} (1200px),
        "xxlg": ${units["length"].name} | ${units["length-percentage"].name} | ${units["calc()"].name} (1400px)
    }
}
`}/>