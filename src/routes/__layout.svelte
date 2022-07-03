<script>
	import '../styles/tailwind.css';
	import SvelteSeo from 'svelte-seo';
</script>

<svelte:head>
	<title>matt r</title>
</svelte:head>

<SvelteSeo title="matt r" description="matt rafalko &#9679; software engineer" />

<slot />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		/* @apply bg-black; */
		@apply bg-green-100 dark:bg-black font-bree text-green-700 dark:text-green-50 antialiased mx-auto max-w-5xl;
		padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom)
			env(safe-area-inset-left);
	}

	h1 {
		@apply text-6xl tracking-widest;
	}

	#svelte {
		@apply h-screen flex;
	}
</style>
