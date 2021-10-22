<script>
    import {art} from "../stores/art";
</script>

<h1 class="text-5xl">Matt R</h1>

{#each $art as item }
    <span>{item.title}</span>
    <span>{item.credit_line}</span>
{/each}