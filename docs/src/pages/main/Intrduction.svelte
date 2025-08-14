<script lang="ts">
    import Text from "../../lib/Text.svelte";
    import Header from "./Header.svelte";
    import Code from "../../lib/Code";
    import Title from "../../lib/Title.svelte";
</script>

<Header
    title={"Introduction"}
    description={"Forge-css is the light-weight css tool for creating utility-css by sass/scss files prepared."}
/>

<Title type={4}>Preparation(Optional)</Title>
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

<Title type={4}>Command</Title>
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
<Title type={5}>Example</Title>
<Code.Block lang="bash" code={"forge -o output.css -c config.json"} />
