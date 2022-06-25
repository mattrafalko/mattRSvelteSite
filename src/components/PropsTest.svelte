<script>
	export let aProp = {
		name: 'prop',
		desc: 'a prop',
		value: 15
	};
</script>

<div class="border-2 border-pink-400 rounded-sm p-6 ">
	<h2>{aProp.name}</h2>
	<h3>{aProp.desc}</h3>
	<h6>{aProp.value}</h6>
</div>
