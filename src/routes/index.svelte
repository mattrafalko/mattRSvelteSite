<script>
	import { slide } from 'svelte/transition';
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

<div>
	<div class="flex flex-col place-content-center h-screen">
		<div>
			<div class="mb-16 space-y-4">
				<h1>matt rafalko</h1>
				<span class="text-sm block">software engineer</span>
				<span class="text-sm">let's build together</span>
			</div>
			<ul class="space-y-4 w-24 h-56">
				{#if ready}
					{#each links as link}
						<li transition:slide={{ duration: 625 }}>
							<a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	</div>
</div>

<style>

	li {
		@apply text-xl tracking-wider hover:text-green-400;
	}
</style>
