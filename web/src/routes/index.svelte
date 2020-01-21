<script>
	import AboutProfilePic from '../components/AboutProfilePic.svelte';
	import AboutSkill from '../components/AboutSkill.svelte';
	import AboutSectionLabel from '../components/AboutSectionLabel.svelte';
	import AboutParagraph from '../components/AboutParagraph.svelte';
	import AboutDivider from '../components/AboutDivider.svelte';
	import JSIcon from '../../static/js_icon.svg';
	import ReactIcon from '../../static/react_icon.svg';
	import SvelteIcon from '../../static/svelte_icon.svg';

	// TODO: Hook up page w/ Sanity.io CMS
</script>

<style>
	section {
		align-items: center;
		padding-top: 50px;
	}
</style>

<svelte:head>
	<title>Gabriel Womble | About</title>
</svelte:head>

<section>
	<AboutProfilePic>
		<img src="me.jpg" alt="Gabriel Womble in the flesh" />
	</AboutProfilePic>
	<AboutSectionLabel
		header="Who I Am"
		subheader="Developer | Musician | Optimist"
	/>
	<AboutDivider />
	<AboutParagraph
		text="Hello! My name is Gabriel, but most people call me Gabe. I’m a (mostly) self-taught Front End Developer with a solid background working on performant large-scale applications. I currently work remotely from Nashville, Tennesee!"
	/>
	<AboutDivider />
	<AboutSectionLabel
		header="Core Skills"
	/>
	<AboutDivider />
	<AboutSkill
		label="Language of Choice"
		value="JavaScript"
	>
		{@html JSIcon}	
	</AboutSkill>
	<AboutSkill
		label="Most Used"
		value="React"
	>
		{@html ReactIcon}	
	</AboutSkill>
	<AboutSkill
		label="Currently Enjoying"
		value="Svelte"
	>
		{@html SvelteIcon}	
	</AboutSkill>
	<AboutDivider />
	<AboutParagraph
		text="While I experiement with many technologies for fun, I am very experienced with the modern front end ecosystem, whether that be bundlers, building responsive layouts, or complex state management."
	/>
</section>



