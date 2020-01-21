<script>
	import theme from '../store/theme';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		background-color: var(--app-bg);
		box-sizing: border-box;
		color: var(--app-text);
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
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
	<Footer />
</main>