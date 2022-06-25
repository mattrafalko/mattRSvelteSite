<script>
	import PropsTest from '../components/PropsTest.svelte';

	let array = ['<strong> test 1 </strong>', 'test 2', 'test 3'];

	let count = 0;

	const incrementCount = () => {
		count = count + 1;
	};

	let things = [
		{ name: 'Remove me', id: 1 },
		{ name: 'Delete me', id: 2 },
		{ name: 'Hide me', id: 3 },
		{ name: '86 me', id: 4 }
	];

	const removeItem = (id) => {
		things = things.filter((x) => x.id !== id);
	};

	const timeout = () => {
		let promise = new Promise((resolve) => {
			setTimeout(() => {
				resolve(Math.random());
			}, 1000);
		});

		return promise;
	};

	const getRandomNumber = async () => {
		return await timeout();
	};

	let promise = 0;

	const handleGetNum = () => {
		promise = getRandomNumber();
	};

	let buttonColor = 'black';
</script>

<div class="flex flex-col space-y-6 max-w-3xl mx-auto">
	<div>
		<h1 class="text-6xl">Test</h1>

		<h2>this page is used to practice svelte</h2>
	</div>

	<!-- ifs -->
	<div>
		{#if count > 3}
			<h2>count has surpassed 3</h2>
		{:else if count === 3}
			<h2>count is 3</h2>
		{:else}
			<h2>count is below 3</h2>
		{/if}
	</div>

	<!-- loops -->
	<div class="flex flex-col h-52 justify-between">
		{#each array as item}
			<h3>{@html item}</h3>
		{/each}
	</div>

	<!-- buttons -->
	<div class="mt-6 border-green-700 border-2 rounded-sm p-6 justify-items-center flex flex-col ">
		<button class="px-2 py-1 bg-green-400 rounded-md" on:click={incrementCount}
			>Count: {count}</button
		>
	</div>

	<!-- props test -->
	<PropsTest aProp={{ name: 'test', desc: 'a test desc', value: count }} />

	<!-- keys -->
	<div class="border-2 border-purple-500 rounded-md">
		<ul class="flex flex-col space-y-4">
			{#each things as thing (thing.id)}
				<button on:click={() => removeItem(thing.id)}><li>{thing.name}</li></button>
			{/each}
		</ul>
	</div>

	<!-- promises -->
	<div class="border-2 border-yellow-400 p-6">
		<button class="border-2 border-yellow-400 px-2 py-1 rounded-md" on:click={handleGetNum}
			>get number</button
		>
		{#await promise}
			<p>waiting...</p>
		{:then number}
			<h1>{number}</h1>
		{:catch}
			<span class=" text-red-400 "><strong>ERROR</strong></span>
		{/await}
	</div>

	<div class="border-2 border-red-400 rounded-md p-6">
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<button
			style={`background-color: ${buttonColor}`}
			on:mouseover={(e) => (buttonColor = 'white')}
			on:mouseleave={(e) => (buttonColor = 'black')}
		>
			Mouse over to change color
		</button>
	</div>
</div>
