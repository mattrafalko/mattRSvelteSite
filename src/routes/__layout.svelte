<script>
import '../styles/tailwind.css'
</script>

<svelte:head>
    <title>matt r</title>
</svelte:head>


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

