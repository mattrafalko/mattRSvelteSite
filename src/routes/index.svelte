<script>
	import {slide } from 'svelte/transition';
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

<div class="mx-auto max-w-5xl font-lato text-red-300 px-10 md:px-0 ">
	<div class="flex flex-col place-content-center h-screen">
		<div>
			<h1 class="text-4xl font-black italic mb-16">matt rafalko</h1>
			{#if ready}
				<ul class="space-y-4 w-24">
					{#each links as link}
						<li transition:slide="{{duration: 1250}}" class="font-semibold text-xl hover:text-red-200">
							<a href={link.url} target="_blank">{link.name}</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</div>
