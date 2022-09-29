<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div
  id="wrapper"
  class="relative h-full w-full min-w-0 rounded-lg bg-base-100 bg-opacity-50 backdrop-blur-lg hover:bg-opacity-80 hover:ring hover:ring-yellow-500 dark:bg-base-800 dark:bg-opacity-70 dark:backdrop-blur-lg hover:dark:bg-opacity-90 dark:hover:outline-yellow-500"
>
  <div
    class="absolute h-8 w-full rounded-t-lg border-b border-base-400 bg-base-200 text-center shadow dark:border-base-500 dark:bg-base-700"
  >
    <div class="mt-1 text-base-500 dark:text-base-400">Wiki</div>
  </div>
  <div
    class=" prose prose-neutral h-full max-w-none overflow-auto px-6 pt-12 pb-12 dark:prose-invert"
  >
    <svelte:component this={data.content} />
  </div>
</div>
