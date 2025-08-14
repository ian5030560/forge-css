<script>
    import Code from "../../lib/Code";
    import Title from "../../lib/Title.svelte";
    import Header from "./Header.svelte";
</script>

<Header
    title={"Download"}
    description={"Install forge-css to get sass/scss files prepared and the compiled Javascript files for command line interface of forge-css by NPM."}
/>

<Title type={4}>Installation</Title>
<Title type={5}>Global</Title>
<Code.Block code={"npm install forge-css -g"} lang={"bash"} />
<Title type={5}>Local</Title>
<Code.Block code={"npm install forge-css --save-dev"} lang={"bash"} />
