<script>
  import theme from '../store/theme';
  import { THEMES } from '../constants/store';
  import Icon from './Icon.svelte';

  $: isLightTheme = $theme === THEMES.LIGHT;

  function toggleTheme() {
    theme.update((t) => {
      return t === THEMES.LIGHT
        ? THEMES.DARK
        : THEMES.LIGHT;
    });
  }
</script>

<style>
  .theme-toggle {
    align-items: center;
    background: transparent;
    border: 1px solid var(--peter-river);
    border-radius: 0.5em;
    color: var(--app-text);
    display: flex;
    justify-content: center;
    padding: 0.5em;
  }

  .theme-toggle.dark {
    border: 1px solid var(--orange);
  }

  .theme-toggle :global(span) {
    color: var(--peter-river);
    font-size: 1.2em;
  }

  .theme-toggle.dark :global(span) {
    color: var(--orange);
  }
</style>

<button class={`theme-toggle ${$theme}`} on:click={toggleTheme}>
  {#if isLightTheme}
    <Icon name="fas fa-moon" />
  {:else}
    <Icon name="fas fa-sun" />
  {/if}
</button>