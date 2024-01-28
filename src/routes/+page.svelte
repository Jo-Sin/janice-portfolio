<script>
	import { getContext } from 'svelte';

	const styling = getContext('styling');
</script>

<main class="md:flex">
	<div class="md:w-1/2 md:h-[calc(100vh-96px)]">
		<img src="/cat.jpg" alt="hero" class="w-full h-full object-cover" />
	</div>
	<div
		class="md:w-1/2 md:h-[calc(100vh-96px)] flex flex-col justify-center p-12 {$styling.bgPrimaryLight} text-gray-800"
	>
		<h1 class="text-3xl {$styling.textPrimary}">Hi! I'm Janice Saji</h1>
		<p class="my-8">
			I’m a designer & lettering artist with a knack for marketing who loves helping creatives and
			brands get more eyes on their work.
		</p>
		<button class="{$styling.bgSecondary} hover:bg-yellow-700 text-white py-3.5 px-7 w-max"
			>Find out more</button
		>
	</div>
</main>
