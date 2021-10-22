<script>
import Nav from '../components/Navbar.svelte'
import '../styles/tailwind.css'
</script>

<Nav/>

<slot></slot>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

