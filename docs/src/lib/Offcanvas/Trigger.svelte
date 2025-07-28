<script lang="ts">
    import { Dialog } from "bits-ui";

    export type TriggerProps = Dialog.TriggerProps;
    let props: TriggerProps = $props();
</script>

<Dialog.Trigger {...props} />