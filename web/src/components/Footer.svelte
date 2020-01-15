<script>
  import Icon from './Icon.svelte';

  const socials = [
    {
      icon: {
        dataSymbol: 'instagram',
        dataClass: 'fab fa-instagram',
      },
      href: 'https://instagram.com/gabrielwomble',
    },
    {
      icon: {
        dataSymbol: 'github',
        dataClass: 'fab fa-github-square',
      },
      href: 'https://github.com/gabewomble',
    },
    {
      icon: {
        dataSymbol: 'linkedin',
        dataClass: 'fab fa-linkedin',
      },
      href: 'https://linkedin.com/in/gabewomble',
    },
  ];
</script>

<style>
  footer {
    padding: 2em 0;
  }

  .socials-container {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  .socials-container :global(svg) {
    color: var(--app-text);
    height: 2em;
    margin: 0 0.5em;
    width: 2em;
  }
</style>

<footer>
  <div class="socials-container">
    {#each socials as social}
      <a target="_blank" href={social.href}>
        <Icon {...social.icon} />
      </a>
    {/each}
  </div>
</footer>