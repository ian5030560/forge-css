<script lang="ts">
    import Layout from "./Layout.svelte";
    import { Router } from "@mateothegreat/svelte5-router";
    import NotFound from "./pages/NotFound.svelte";
    import Intrduction from "./pages/main/Intrduction.svelte";
    import Download from "./pages/main/Download.svelte";
</script>

<Layout>
    <Router
        routes={[
            {
                path: "/",
                component: Intrduction,
            },
            {
                path: "/download",
                component: Download,
            },
            {
                path: "404",
                component: NotFound,
                status: 404,
            },
        ]}
    />
</Layout>
