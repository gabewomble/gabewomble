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

  .theme-toggle :global(svg) {
    color: var(--peter-river);
    height: 1.5em;
    width: 1.5em;
  }

  .theme-toggle.dark :global(svg) {
    color: var(--orange);
  }

  p {
    margin: 0.75em;
    font-size: 16px;
    font-weight: 300;
  }
</style>

<button class={`theme-toggle ${$theme}`} on:click={toggleTheme}>
  {#if isLightTheme}
    <Icon dataSymbol="dark-icon" dataClass="fas fa-moon" />
  {:else}
    <Icon dataSymbol="light-icon" dataClass="fas fa-sun" />
  {/if}
</button>