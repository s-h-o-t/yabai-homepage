<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="container mx-auto p-12 pt-32">
  <svelte:component this={data.content} class="prose" />
</div>
