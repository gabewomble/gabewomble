<script>
	import ThemeToggle from './ThemeToggle.svelte';
	export let segment;

	const navItems = [
		'blog',
		'github',
	];
</script>

<style>
	nav {
		align-items: center;
		border-bottom: 2px solid var(--app-border);
		display: flex;
		font-weight: 300;
		justify-content: space-between;
		padding: 0 1em;
		width: 100%;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: var(--app-emphasis);
		display: block;
		bottom: -2px;
	}

	a {
		text-transform: capitalize;
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>about</a></li>
		{#each navItems as navItem}
			<li>
				<a rel=prefetch class={segment === navItem ? "selected" : ""} href={navItem}>{navItem}</a>
			</li>
		{/each}
	</ul>
	<ThemeToggle />
</nav>