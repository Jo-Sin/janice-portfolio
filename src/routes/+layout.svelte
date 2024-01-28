<script>
	import '../app.css';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const styling = writable();
	$: styling.set({
		bgPrimary: 'bg-[#006D77]',
		textPrimary: 'text-[#006D77]',
		bgPrimaryLight: 'bg-[#9DC5BB]',
		hoverBgPrimaryLight: 'hover:bg-[#9DC5BB]',
		textPrimaryLight: 'bg-[#9DC5BB]',
		bgSecondary: 'bg-[#FFD639]'
	});

	setContext('styling', styling);

	let mobileDropdownActive = false;

	let menuOptions = [
		{ url: '/', name: 'Home' },
		{ url: '/', name: 'About' },
		{ url: '/', name: 'Work' },
		{ url: '/', name: 'Blog' },
		{ url: '/', name: 'Mailing list' },
		{ url: '/', name: 'Contact' }
	];

	let updateColor = () => {
		$styling.bgPrimary = 'bg-[#9dc5bb]';
	};
</script>

<header class="p-4 {$styling.bgPrimary} text-gray-100">
	<nav class="flex justify-between h-16 mx-auto">
		<a href="/" aria-label="Back to homepage" class="flex items-center p-2"> Janice </a>
		<ul class="items-stretch hidden space-x-3 md:flex">
			{#each menuOptions as option}
				<li class="flex">
					<a href={option.url} class="flex items-center px-4 -mb-1">{option.name}</a>
				</li>
			{/each}
		</ul>
		<div class="flex relative justify-end p-4 md:hidden">
			<button
				on:click={() => {
					mobileDropdownActive = !mobileDropdownActive;
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>

			{#if mobileDropdownActive}
				<div
					class="absolute top-12 right-0 {$styling.bgPrimary} border-[1px] border-solid border-white border-opacity-50 w-36"
				>
					{#each menuOptions as option}
						<a
							href={option.url}
							class="flex items-center p-2 {$styling.hoverBgPrimaryLight} cursor-pointer"
							>{option.name}</a
						>
					{/each}
				</div>
			{/if}
		</div>
	</nav>
</header>
<slot />
<button
	on:click={updateColor}
	class="fixed bottom-12 right-12 bg-yellow-600 hover:bg-yellow-700 text-white py-3.5 px-7 w-max"
	>Random</button
>
