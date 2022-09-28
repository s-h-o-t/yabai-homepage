<script lang="ts">
  import { page } from "$app/stores";
  import LogoMono from "$lib/components/icons/LogoMono.svelte";
  import Github from "$lib/components/icons/Github.svelte";
</script>

<nav class="h-10 w-full px-2 text-base-100 backdrop-blur-3xl">
  <div class="flex justify-between p-1">
    <div class="flex items-center space-x-6">
      <a href="/" class=" w-[70px]">
        <LogoMono />
      </a>
      <a class:active={$page.url.pathname === "/"} href="/" class="pb-1">Home</a
      >
      <a
        class:active={$page.url.href.includes("wiki")}
        href="/wiki"
        class="pb-1">Wiki</a
      >
    </div>
    <div class="flex items-center space-x-4">
      <a
        class="mb-1 h-[24px] w-[26px]"
        href="https://github.com/koekeishiya/yabai"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Github />
      </a>
    </div>
  </div>
</nav>

<style lang="postcss">
  .active {
    @apply font-bold;
  }
</style>
