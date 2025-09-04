<script lang="ts">
    import Text from "../../lib/Text.svelte";
    import Header from "./components/Header.svelte";
    import Code from "../../lib/Code";
    import TableOfContents from "../../lib/TableOfContents";
    import List from "../../lib/List";
    import Button from "../../lib/Button";
    import units from "../units";
    import Link from "../../lib/Link.svelte";
</script>

<Header title={"Introduction"}>
    {#snippet description()}
        Forge-css is the light-weight css tool for creating utility-css by
        sass/scss files prepared. It's inspired by <Link
            class="font-size-median"
            href="https://getbootstrap.com/"
            >Bootstrap
        </Link>.
    {/snippet}
</Header>

<TableOfContents.Title type={3} linkTag={"usage"} content={"Usage"} />
<TableOfContents.Title
    type={4}
    content={"Preparation(Optional)"}
    linkTag="preparation"
/>
<Text contrast={"low"}>Prepare a configuration json file for forge-css.</Text>
<Code.Block
    title="config.json"
    lang="json"
    code={`{
    "break-points": {
        "xs": 576,
        "sm": 576,
        "md": 768,
        "lg": 992,
        "xlg": 1100,
        "xxlg": 1350
    }
}`}
/>

<TableOfContents.Title type={4} content={"Command"} linkTag="command" />
<Text contrast={"low"}>
    Use 'forge' command to build a utility css file instantly
</Text>
<Code.Block
    lang="bash"
    code={"forge -o [output].css -c [config].json"}
    copyable={false}
/>
<div class="vstack gap-1">
    <div class="hstack gap-1">
        <Code.Inline class="text-wrap-nowrap">-o --output:</Code.Inline>
        <Text>The output for the css file generated.</Text>
    </div>
    <div class="hstack gap-1">
        <Code.Inline class="text-wrap-nowrap">-c --config:</Code.Inline>
        <Text>The configuration of all utility css.(optional)</Text>
    </div>
</div>
<TableOfContents.Title type={5} content={"Example"} linkTag="example" />
<Code.Block lang="bash" code={"forge -o output.css -c config.json"} />

<TableOfContents.Title type={3} linkTag={"units"} content={"Units"} />
<Text contrast={"low"}>
    These units are used in the configuration file. Some of them come from <Link
        href="https://developer.mozilla.org/en-US/">
        MDN Web Docs
    </Link>.
</Text>
<List.Root type="ul" noHeaded={false}>
    {#each Object.entries(units) as [_, unit]}
        <List.Item>
            {#if unit.url}
                <Link href={unit.url}>{unit.name}</Link>
            {:else}
                <Text>{unit.name}</Text>
            {/if}

            {#if unit.description}
                <Text class="pl-1" contrast={"low"}>{unit.description}</Text>
            {/if}
        </List.Item>
    {/each}
</List.Root>
