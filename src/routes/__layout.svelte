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
        @apply bg-red-50;
    }


</style>

