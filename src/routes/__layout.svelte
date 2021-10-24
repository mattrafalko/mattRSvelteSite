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
        @apply bg-green-100 dark:bg-black;
    }


</style>

