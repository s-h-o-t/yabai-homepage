<script lang="ts">
  import SideNav from "$lib/components/SideNav.svelte";
</script>

<div class="mx-auto flex h-full min-h-0 w-full max-w-6xl space-x-6 p-6">
  <SideNav />
  <slot />
</div>
