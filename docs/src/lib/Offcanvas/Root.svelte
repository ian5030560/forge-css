<script lang="ts">
    import { Dialog } from "bits-ui";

    export type RootProps = Dialog.RootProps;
    let props: RootProps = $props();
</script>

<Dialog.Root {...props} />
