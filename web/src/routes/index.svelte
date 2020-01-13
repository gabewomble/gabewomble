<style>
	section {
		align-items: center;
		justify-items: center;
		display: grid;
		width: 100%;
	}

	img {
		max-width: 70%;
		min-width: 300px;
		width: 30%;
	}
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Gabriel Womble | About</title>
</svelte:head>

<section>
	<h1>Hello There!</h1>
	<img src="me.jpg" alt="Gabriel Womble in the flesh" />
</section>



<p><strong>Go to <a href="/blog">/blog</a> to see content loaded from <a href="https://www.sanity.io">Sanity</a></strong></p>
