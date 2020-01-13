<script context="module">
	export async function preload() {
		const res = await this.fetch('https://api.github.com/users/gabewomble/repos');
		const repos = await res.json();

		return { repos };
	}
</script>

<script>
  export let repos;
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
  }  
</style>

<svelte:head>
  <title>Gabriel Womble | Github</title>
</svelte:head>

<section>
  {#each repos as repo}
    <div>{repo.name}</div>
  {/each}
</section>