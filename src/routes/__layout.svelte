<script>
import '../styles/tailwind.css'
import SvelteSeo from 'svelte-seo'
</script>

<svelte:head>
    <title>matt r</title>
</svelte:head>

<SvelteSeo
    title="matt r"
    description="matt rafalko - software engineer"
/>

<slot></slot>

<style global lang="postcss">
    
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    body {
        /* @apply bg-black; */
        @apply bg-green-100 dark:bg-black font-bree text-green-700 dark:text-green-50 antialiased mx-auto max-w-5xl p-10;
    }

    h1 {
		@apply text-6xl tracking-widest;
	}




</style>

