<script>
    import Code from "../../lib/Code";
    import TableOfContents from "../../lib/TableOfContents";
    import Header from "./components/Header.svelte";
</script>

<Header title={"Download"}>
    {#snippet description()}
        Install forge-css to get sass/scss files prepared and the compiled Javascript files for command line interface of forge-css by NPM.
    {/snippet}
</Header>

<TableOfContents.Title linkTag={"installation"} type={3} content={"Installation"}/>
<TableOfContents.Title linkTag={"global"} type={4} content={"Global"}/>
<Code.Block code={"npm install forge-css -g"} lang={"bash"} />
<TableOfContents.Title linkTag={"local"} type={4} content={"Local"}/>
<Code.Block code={"npm install forge-css --save-dev"} lang={"bash"} />
