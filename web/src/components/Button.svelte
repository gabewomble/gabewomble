<script>
  export let variant = 'default';
</script>

<style>
  button {
    align-items: center;
    border: 1px solid var(--app-border);
    color: var(--app-text);
    display: flex;
  }

  .default {
    border-radius: 0.5em;
    height: 3.5em;
    padding: 0.5em 1em;
  }
</style>

<button class={variant} on:click>
  <slot />
</button>