<script context="module">
	export async function preload() {
		const res = await this.fetch('https://api.github.com/users/gabewomble/repos');
		const repos = await res.json();

		return { repos };
  }
</script>

<script>
  import Button from '../../components/Button.svelte';
  import Repo from '../../components/Repo.svelte';

  export let repos;

  let showForks = false;

  $: btnText = `${showForks ? 'Hide' : 'Show'} forks`;
  
  function toggleShowForks() {
    showForks = !showForks;
  }
</script>

<style>
  .page-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
  }

  h2 {
    line-height: 1;
  }

</style>

<svelte:head>
  <title>Gabriel Womble | Github</title>
</svelte:head>

<section>
  <div class="page-header">
    <h2>Public Projects</h2>
    <Button on:click={toggleShowForks}>{btnText}</Button>
  </div>
  {#each repos as repo}
    {#if !repo.fork || (repo.fork && showForks)}
      <Repo {repo} />
    {/if}
  {/each}
</section>