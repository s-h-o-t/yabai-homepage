<script lang="ts">
  import { page } from "$app/stores";
  import Logo from "$lib/components/icons/Logo.svelte";
  import Github from "$lib/components/icons/Github.svelte";
</script>

<nav
  class="h-18 fixed z-50 w-full border-b border-base-300 bg-base-100 bg-opacity-50 backdrop-blur dark:border-base-900 dark:bg-base-800 dark:bg-opacity-50 dark:backdrop-blur"
>
  <div class="container mx-auto flex justify-between p-3 px-6">
    <div class="flex items-center space-x-6">
      <a href="/" class="-ml-4 w-24">
        <Logo />
      </a>
      <a class:active={$page.url.href.includes("wiki")} href="/wiki">wiki</a>
    </div>
    <div class="flex items-center space-x-4">
      <a
        class="h-[24px] w-[26px]"
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
