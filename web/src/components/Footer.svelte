<script>
  import Icon from './Icon.svelte';

  const socials = [
    {
      icon: {
        name: 'fab fa-instagram',
      },
      href: 'https://instagram.com/gabrielwomble',
    },
    {
      icon: {
        name: 'fab fa-github-square',
      },
      href: 'https://github.com/gabewomble',
    },
    {
      icon: {
        name: 'fab fa-linkedin',
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

  .socials-container :global(span) {
    color: var(--app-text);
    font-size: 1.5em;
    margin: 0 0.5em;
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