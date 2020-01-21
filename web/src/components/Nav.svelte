<script>
	import ThemeToggle from './ThemeToggle.svelte';
	export let segment;

	const navItems = [
		// 'blog',
		'github',
	];
</script>

<style>
	nav {
		border-bottom: 2px solid var(--app-border);
		width: 100%;
	}

	div {
		align-items: center;
		display: flex;
		font-weight: 300;
		justify-content: space-between;
		padding: 0 1em;
		margin: 0 auto;
		width: 100%;
		max-width: var(--max-width);
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

	li:first-child > a {
		padding-left: 0;
	}
</style>

<nav>
	<div>
		<ul>
			<li><a class='{segment === undefined ? "selected" : ""}' href='.'>about</a></li>
			{#each navItems as navItem}
				<li>
					<a rel=prefetch class={segment === navItem ? "selected" : ""} href={navItem}>{navItem}</a>
				</li>
			{/each}
		</ul>
		<ThemeToggle />
	</div>
</nav>