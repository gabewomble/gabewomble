<script>
  import moment from 'moment';

  export let repo;
</script>

<style>
  .repo-layout {
    align-self: stretch;
    border-bottom: 1px solid var(--app-border);
    color: var(--app-text);
    display: flex;
    flex-direction: column;
    justify-self: normal;
    min-width: 300px;
  }

  .repo-header {
    align-self: flex-start;
    color: var(--app-emphasis);
  }

  .repo-header h4 {
    font-size: 1.25em;
    margin: 0.5em 0;
  }

  .repo-desc > P {
    font-size: 0.8em;
    font-weight: 200;
  }

  .repo-details {
    align-items: center;
    display: flex;
    font-size: 0.75em;
  }

  p {
    margin: 0.5em 0;
  }

  .repo-details > p:not(:first-child) {
    margin-left: 0.5em;
  }

  .repo-details > p:not(:last-child)::after {
    content: ",";
  }
</style>

<div class="repo-layout">
  <div class="repo-header">
    <a href={repo.html_url} target="_blank">
      <h4>
        {repo.name}
      </h4>
    </a>
  </div>
  {#if repo.description}
    <div class="repo-desc">
      <p>{repo.description}</p>
    </div>
  {/if}
  <div class="repo-details">
    {#if repo.language}
      <p>Language: {repo.language}</p>
    {/if}
    {#if repo.updated_at}
      <p>Last Updated: {moment(repo.updated_at).format('M/D/Y')}</p>
    {/if}
  </div>
</div>