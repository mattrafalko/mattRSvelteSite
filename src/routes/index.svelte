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

<div class="mx-auto max-w-5xl   px-10 md:px-0 ">
	<div class="flex flex-col place-content-center h-screen">
		<div>
			<div class="mb-16">
				<h1>matt rafalko</h1>
				<span class="text-sm text-green-700 dark:text-green-50 font-bree">software engineer</span>
			</div>
			<ul class="space-y-4 w-24 h-24">
				{#if ready}
					{#each links as link}
						<li transition:slide={{ duration: 1250 }}>
							<a href={link.url} target="_blank">{link.name}</a>
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	</div>
</div>

<style>
	h1 {
		@apply text-6xl tracking-widest font-bree text-green-700 dark:text-green-50;
	}

	li {
		@apply font-semibold text-xl tracking-wider text-green-700 dark:text-green-50 hover:text-green-400 hover:drop-shadow-xl  font-bree;
	}
</style>
