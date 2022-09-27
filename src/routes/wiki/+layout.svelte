<script lang="ts">
  import SideNav from "$lib/components/SideNav.svelte";
</script>

<SideNav />
<!-- pl-64 mathes the SideNAv width -->
<div class="container mx-auto pl-64">
  <slot />
</div>
