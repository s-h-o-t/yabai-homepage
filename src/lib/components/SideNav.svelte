<script lang="ts">
  import { page } from "$app/stores";
  import Logo from "./icons/Logo.svelte";
</script>

<div class="flex flex-col justify-between">
  <nav
    class="relative h-[75%] w-[250px] shrink-0 overflow-auto rounded-lg bg-base-100 bg-opacity-50 backdrop-blur-lg hover:bg-opacity-80 hover:ring hover:ring-yellow-500 dark:bg-base-800 dark:bg-opacity-70 dark:backdrop-blur-lg hover:dark:bg-opacity-90 dark:hover:outline-yellow-500"
  >
    <div
      class="absolute h-8 w-full rounded-t-lg border-b border-base-400 bg-base-200 text-center shadow dark:border-base-500 dark:bg-base-700"
    >
      <div class="mt-1 text-base-500 dark:text-base-400">Contents</div>
    </div>
    <div data-sveltekit-prefetch class="mt-6 flex flex-col space-y-2 p-5">
      <a class:font-bold={$page.url.href.includes("Home")} href="/wiki/Home"
        >Home</a
      >
      <a
        class:font-bold={$page.url.href.includes(
          "Disabling-System-Integrity-Protection"
        )}
        href="/wiki/Disabling-System-Integrity-Protection"
        >Disabling System Integrity Protection</a
      >
      <a
        class:font-bold={$page.url.href.includes(
          "Installing-yabai-(latest-release)"
        )}
        href="/wiki/Installing-yabai-(latest-release)">Installation - Release</a
      >
      <a
        class:font-bold={$page.url.href.includes(
          "Installing-yabai-(from-HEAD)"
        )}
        href="/wiki/Installing-yabai-(from-HEAD)">Installation - HEAD</a
      >
      <a
        class:font-bold={$page.url.href.includes("Configuration")}
        href="/wiki/Configuration">Configuration</a
      >
      <a
        class:font-bold={$page.url.href.includes("Commands")}
        href="/wiki/Commands">Commands</a
      >
      <a
        class:active={$page.url.href.includes("Tips-and-tricks")}
        href="/wiki/Tips-and-tricks">Tips & Tricks</a
      >
    </div>
  </nav>
  <div class="h-[25%] w-[250px] pt-6 ">
    <div
      class="relative h-full w-[250px] shrink-0 overflow-auto rounded-lg bg-base-100 bg-opacity-50 backdrop-blur-lg hover:bg-opacity-90 hover:ring hover:ring-yellow-500 dark:bg-base-800 dark:bg-opacity-70 dark:backdrop-blur-lg dark:hover:bg-opacity-90 dark:hover:outline-yellow-500"
    >
      <div
        class="absolute h-8 w-full rounded-t-lg border-b border-base-400 bg-base-200 text-center shadow dark:border-base-500 dark:bg-base-700"
      >
        <div class="mt-1 text-base-500 dark:text-base-400">Logo.svg</div>
      </div>
      <div class="py-auto grid h-full overflow-auto pt-8">
        <div class="my-auto">
          <Logo />
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  a:hover {
    @apply underline;
  }
</style>
