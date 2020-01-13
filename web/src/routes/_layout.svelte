<script>
	import theme from '../store/theme';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		background-color: var(--app-bg);
		box-sizing: border-box;
		color: var(--app-text);
		height: 100vh;
		margin: 0 auto;
		overflow-x: hidden;
		overflow-y: scroll;
		position: relative;
		width: 100vw;
	}
</style>


<main class={$theme}>
	<Nav {segment}/>
		<slot />
</main>