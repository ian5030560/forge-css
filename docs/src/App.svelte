<script lang="ts">
    import Layout from "./Layout.svelte";
    import { Router } from "@mateothegreat/svelte5-router";

    function createAsyncComponent(path: string) {
        return async () => import(/* @vite-ignore */ path);
    }
</script>

<Layout>
    <Router
        renavigation={false}
        routes={[
            {
                path: "/",
                component: createAsyncComponent(
                    "./pages/main/Intrduction.svelte",
                ),
            },
            {
                path: "/download",
                component: createAsyncComponent("./pages/main/Download.svelte"),
            },
            {
                path: "/breakpoints",
                component: createAsyncComponent(
                    "./pages/main/Breakpoints.svelte",
                ),
            },
            {
                path: "/containers",
                component: createAsyncComponent(
                    "./pages/main/Containers.svelte",
                ),
            },
            {
                path: "404",
                component: createAsyncComponent("./pages/NotFound.svelte"),
                status: 404,
            },
        ]}
    />
</Layout>
