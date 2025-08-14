<script lang="ts">
    import Title from "../../lib/Title.svelte";
    import Header from "./Header.svelte";
    import Table from "../../lib/Table";
    import Code from "../../lib/Code";

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

<Header
    title={"Breakpoints"}
    description={"The breakpoints determines the responsive layout when the screen width changes acrosss devices."}
/>

<Title type={4}>Available points</Title>
<Table.Root>
    {#snippet header()}
        <Table.Row>
            <Table.Cell header={true} scope="col" class="text-align-left">Name</Table.Cell>
            <Table.Cell header={true} scope="col" class="text-align-left">Class name</Table.Cell>
            <Table.Cell header={true} scope="col" class="text-align-left">Width</Table.Cell>
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
<Title type={4}>Configuration</Title>
<Code.Block copyable={false} lang={"json"} code={`
    {
        .....
        "break-points": {
            "xs": number | 576,
            "sm": number | 576,
            "md": number | 768,
            "lg": number | 992,
            "xlg": number | 1200,
            "xxlg": number | 1400
        },
        .....
    }
`}/>