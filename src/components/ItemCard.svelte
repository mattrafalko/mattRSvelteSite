<script>
	import { cart } from '../stores/cart';

	import { fly } from 'svelte/transition';

	export let item = {
		image: '',
		title: '',
		price: 0,
		category: '',
		description: '',
		rating: {
			rate: 0,
			count: 0
		}
	};

	const addToCart = (item) => {
		$cart = [...$cart, item];
	};
</script>

<div
	transition:fly={{ y: 100, duration: 500 }}
	class="mb-6 border-2 border-green-500
    hover:border-green-700 rounded-md flex flex-col max-w-md mx-auto transition-all"
>
	<div class="overflow-hidden w-full h-96">
		<div class="image flex justify-center items-center" style="--image: url({item.image})" />
		<img
			class=" mx-auto relative h-72 hover:scale-110 transition-all"
			src={item.image}
			alt={item.description}
		/>
	</div>
	<div class="mt-2 p-3">
		<h2 class="text-xl text-green-400">{item.title}</h2>
		<div class="mt-4 flex justify-between text-sm">
			<span class="text-green-600">${item.price}</span>
			<span class="text-green-600">{item.category}</span>
		</div>
		<div class="mt-6 text-sm text-justify">
			<p>{item.description}</p>
		</div>
		<div class="mt-6 text-xs">
			<p>
				<strong class="text-green-600"> {item.rating.rate}</strong> from
				<strong class="text-green-600"> {item.rating.count}</strong> reviews
			</p>
		</div>
		<div class="flex flex-row-reverse w-full">
			<button
				on:click={() => addToCart(item)}
				class="px-2 text-sm py-1 rounded-full text-white bg-green-700 hover:bg-green-500 transition-colors "
				>add to cart</button
			>
		</div>
	</div>
</div>

<style>
	img {
		z-index: 100;
		margin-top: -21rem;
	}

	.image {
		position: relative;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: var(--image);
		min-height: 100%;
		filter: blur(8px);
		z-index: 1;
	}
</style>
