<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
</script>

<div class="flex h-screen flex-col">
  <Navbar />
  <slot />
</div>
