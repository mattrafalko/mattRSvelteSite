<script context="module">
	export const load = async ({ fetch }) => {
		let response = await fetch('https://fakestoreapi.com/products');
		let data = await response.json();
		if (response.ok) {
			return {
				props: {
					items: data
				}
			};
		}
	};
</script>

<script>
	import ItemCard from '../components/ItemCard.svelte';
	import { cart } from '../stores/cart';
	import { fade } from 'svelte/transition';

	export let items;

	const removeItem = (item) => {
		$cart = $cart.filter((x) => x.id !== item.id);
	};
</script>

<div class="mx-auto">
	<div class="">
		<details class="transtion-all mb-8">
			<summary class="hover:cursor-pointer">cart: {$cart.length}</summary>
			<p class="mt-3">
				{#if $cart.length}
					<span transition:fade>click to remove item</span>
				{/if}

				{#each $cart as item}
					<div class="flex w-1/2 justify-between text-green-500 ">
						<span
							transition:fade
							on:click={() => removeItem(item)}
							class="hover:text-pink-500 transition-colors">{item.title}</span
						>
						<span>${item.price}</span>
					</div>
				{/each}

				<button
					disabled={!$cart.length}
					class="text-pink-500 hover:text-pink-300 transition-colors mt-3"
					>proceed to checkout</button
				>
			</p>
		</details>
	</div>
	<div class="flex flex-col mx-auto max-w-3xl">
		{#each items as item}
			<ItemCard {item} class="last:pb-16" />
		{:else}
			<p class="mx-auto" transition:fade>loading items...</p>
		{/each}
	</div>
</div>
