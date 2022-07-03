<script>
	import { fly } from 'svelte/transition';
	const links = [
		{
			name: 'email',
			url: 'mailto:mattrafalko@gmail.com'
		},
		{
			name: 'github',
			url: 'https://www.github.com/mattrafalko'
		},
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/mrafalko'
		}
	];

	import { onMount } from 'svelte';

	let ready = false;

	onMount(() => (ready = true));
</script>

{#if ready}
	<div class="m-auto px-10 sm:px-0">
		<div class="mb-8 space-y-4">
			<h1>matt rafalko</h1>
			<span class="text-sm ">software engineer &#9679; let's build together</span>
		</div>
		<ul class="space-y-4 w-24 h-56">
			{#each links as link}
				<li transition:fly={{ y: -35, duration: 1500 }}>
					<a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	li {
		@apply text-xl tracking-wider hover:text-green-400 transition-colors;
	}
</style>
