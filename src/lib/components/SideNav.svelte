<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="container relative mx-auto">
  <nav
    class="fixed h-screen w-64 overflow-auto bg-base-100 pt-20 dark:bg-base-800"
  >
    <div class="flex flex-col space-y-2 p-3 pl-6 font-thin">
      <a class:active={$page.url.href.includes("Home")} href="/wiki/Home"
        >Home</a
      >
      <a
        class:active={$page.url.href.includes(
          "Disabling-System-Integrity-Protection"
        )}
        href="/wiki/Disabling-System-Integrity-Protection"
        >Disabling System Integrity Protection</a
      >
      <a
        class:active={$page.url.href.includes(
          "Installing-yabai-(latest-release)"
        )}
        href="/wiki/Installing-yabai-(latest-release)"
        >Installing yabai - latest release</a
      >
      <a
        class:active={$page.url.href.includes("Installing-yabai-(from-HEAD)")}
        href="/wiki/Installing-yabai-(from-HEAD)"
        >Installing yabai - from HEAD</a
      >
      <a
        class:active={$page.url.href.includes("Configuration")}
        href="/wiki/Configuration">Configuration</a
      >
      <a
        class:active={$page.url.href.includes("Commands")}
        href="/wiki/Commands">Commands</a
      >
      <a
        class:active={$page.url.href.includes("Tips-and-tricks")}
        href="/wiki/Tips-and-tricks">Tips & Tricks</a
      >
    </div>
  </nav>
</div>

<style lang="postcss">
  nav:before {
    @apply border-r border-base-300 dark:border-base-900;
    content: "";
    pointer-events: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: calc(100% - 64px);
  }

  .active {
    @apply font-bold;
  }
</style>
