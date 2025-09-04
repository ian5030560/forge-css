<script lang="ts">
    import Code from "../../lib/Code";
    import Table from "../../lib/Table";
    import TableOfContents from "../../lib/TableOfContents";
    import Text from "../../lib/Text.svelte";
    import units from "../units";
    import Example from "./components/Example.svelte";
    import Header from "./components/Header.svelte";

    type ContainersData = {
        className: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        xxlg: string;
    };
    const containersList: ContainersData[] = [
        {
            className: "container",
            xs: "100%",
            sm: "540px",
            md: "720px",
            lg: "960px",
            xlg: "1140px",
            xxlg: "1320px",
        },
        {
            className: "container-sm",
            xs: "100%",
            sm: "540px",
            md: "720px",
            lg: "960px",
            xlg: "1140px",
            xxlg: "1320px",
        },
        {
            className: "container-md",
            xs: "100%",
            sm: "100%",
            md: "720px",
            lg: "960px",
            xlg: "1140px",
            xxlg: "1320px",
        },
        {
            className: "container-lg",
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "960px",
            xlg: "1140px",
            xxlg: "1320px",
        },
        {
            className: "container-xlg",
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xlg: "1140px",
            xxlg: "1320px",
        },
        {
            className: "container-xxlg",
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xlg: "100%",
            xxlg: "1320px",
        },
    ];
</script>

<Header title={"Containers"}>
    {#snippet description()}
        Create a responsive container by specifying its width in every
        breakpoint.
    {/snippet}
</Header>

<TableOfContents.Title linkTag={"usage"} type={3} content={"Usage"} />
<Code.Block
    copyable={false}
    lang={"html"}
    code={`<element class='container-{breakpoint}'></element>`}
/>

<TableOfContents.Title linkTag={"example"} type={4} content={"Example"} />
<Example boardClass={"vstack gap-1"} code={`<div class="container p-1" data-example-block>container</div>
<div class="container-sm p-1" data-example-block>container-sm</div>
<div class="container-md p-1" data-example-block>container-md</div>
<div class="container-lg p-1" data-example-block>container-lg</div>
<div class="container-xlg p-1" data-example-block>container-xlg</div>
<div class="container-xxlg p-1" data-example-block>container-xxlg</div>
`}
/>

<TableOfContents.Title
    linkTag={"containers-values"}
    type={3}
    content={"Containers and Values"}
/>
<Table.Root>
    {#snippet header()}
        <Table.Row>
            <Table.Cell header={true} scope="col" class="text-align-left"
                >Class name</Table.Cell
            >
            <Table.Cell header={true} scope="col" class="text-align-left"
                >xs</Table.Cell
            >
            <Table.Cell header={true} scope="col" class="text-align-left"
                >sm</Table.Cell
            >
            <Table.Cell header={true} scope="col" class="text-align-left"
                >md</Table.Cell
            >
            <Table.Cell header={true} scope="col" class="text-align-left"
                >lg</Table.Cell
            >
            <Table.Cell header={true} scope="col" class="text-align-left"
                >xlg</Table.Cell
            >
            <Table.Cell header={true} scope="col" class="text-align-left"
                >xxlg</Table.Cell
            >
        </Table.Row>
    {/snippet}
    {#snippet body()}
        {#each containersList as data}
            <Table.Row>
                <Table.Cell header={true} class="text-align-left"
                    >{data.className}</Table.Cell
                >
                <Table.Cell class="text-align-left">
                    <Code.Inline>{data.xs}</Code.Inline>
                </Table.Cell>
                <Table.Cell class="text-align-left">
                    <Code.Inline>{data.sm}</Code.Inline>
                </Table.Cell>
                <Table.Cell class="text-align-left">
                    <Code.Inline>{data.md}</Code.Inline>
                </Table.Cell>
                <Table.Cell class="text-align-left">
                    <Code.Inline>{data.lg}</Code.Inline>
                </Table.Cell>
                <Table.Cell class="text-align-left">
                    <Code.Inline>{data.xlg}</Code.Inline>
                </Table.Cell>
                <Table.Cell class="text-align-left">
                    <Code.Inline>{data.xxlg}</Code.Inline>
                </Table.Cell>
            </Table.Row>
        {/each}
    {/snippet}
</Table.Root>

<TableOfContents.Title
    linkTag={"configuration"}
    type={3}
    content={"Configuration"}
/>

<Code.Block
    copyable={false}
    lang={"json"}
    code={`{
    "container": {
        "xs": ${units["length"].name} | ${units["length-percentage"].name} | ${units["calc()"].name} (100%),
        "sm": ${units["length"].name} | ${units["length-percentage"].name} | ${units["calc()"].name} (540px),
        "md": ${units["length"].name} | ${units["length-percentage"].name} | ${units["calc()"].name} (720px),
        "lg": ${units["length"].name} | ${units["length-percentage"].name} | ${units["calc()"].name} (960px),
        "xlg": ${units["length"].name} | ${units["length-percentage"].name} | ${units["calc()"].name} (1140px),
        "xxlg": ${units["length"].name} | ${units["length-percentage"].name} | ${units["calc()"].name} (1320px)
    }
}
`}
/>
