<script lang="ts">
	import ColorModal from '$lib/components/ColorModal.svelte';
	import SavedColorsModal from '$lib/components/SavedColorsModal.svelte';
	import { DEFAULT_COLORS } from '$lib/constants/SelectedColors';
	import { selectedColorsStore } from '$lib/stores/SelectedColors';
	import '../app.css';

	let styling = DEFAULT_COLORS;

	selectedColorsStore.subscribe((value) => (styling = value));

	$: cssVarStyles = `--color-primary:${styling.colorPrimary}; --color-secondary:${styling.colorSecondary}; --color-secondary-50:${styling.colorSecondary50}; --color-tertiary:${styling.colorTertiary}; --color-tertiary-50:${styling.colorTertiary50}`;

	let mobileDropdownActive = false;
	let colorModalVisible = false;
	let savedColorsModalVisible = false;

	let menuOptions = [
		{ url: '/', name: 'Home' },
		{ url: '', name: 'About' },
		{ url: '/work', name: 'Work' },
		{ url: '', name: 'Blog' },
		{ url: '', name: 'Mailing list' },
		{ url: '', name: 'Contact' }
	];
</script>

<div id="body-container" style={cssVarStyles}>
	<header class="p-4 text-gray-100 primary-background">
		<nav class="flex justify-between h-16 mx-auto">
			<a href="/" aria-label="Back to homepage" class="flex items-center p-2 text-4xl ml-8">
				Janice
			</a>
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
						class="primary-background absolute top-12 right-0 border-[1px] border-solid border-white border-opacity-50 w-36"
					>
						{#each menuOptions as option}
							<a
								href={option.url}
								class="hover-secondary-background flex items-center p-2 cursor-pointer"
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
		on:click={() => {
			colorModalVisible = true;
		}}
		class="fixed bottom-12 right-12 tertiary-background hover-tertiary-background-50 p-1 w-10 h-10"
	>
		<svg fill="#fff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
			><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g><g id="SVGRepo_iconCarrier">
				<title>random</title>
				<path
					d="M0 24q0 0.832 0.576 1.44t1.44 0.576h1.984q2.048 0 3.904-0.8t3.168-2.144 2.144-3.2 0.8-3.872q0-2.464 1.728-4.224t4.256-1.76h4v1.984q0 0.672 0.384 1.152t0.864 0.704 1.12 0.128 1.056-0.544l4-4q0.608-0.64 0.576-1.44t-0.576-1.408l-4-4q-0.48-0.448-1.088-0.544t-1.12 0.128-0.864 0.704-0.352 1.12v2.016h-4q-2.016 0-3.872 0.8t-3.2 2.112-2.144 3.2-0.768 3.872q0 2.496-1.76 4.256t-4.256 1.76h-1.984q-0.832 0-1.44 0.576t-0.576 1.408zM0 8.032q0 0.832 0.576 1.408t1.44 0.576h1.984q1.408 0 2.592 0.608t2.080 1.664q0.672-2.048 1.984-3.68-2.912-2.592-6.656-2.592h-1.984q-0.832 0-1.44 0.608t-0.576 1.408zM13.376 23.456q2.848 2.56 6.624 2.56h4v2.016q0 0.64 0.384 1.152t0.864 0.704 1.12 0.096 1.056-0.544l4-4q0.608-0.608 0.576-1.44t-0.576-1.376l-4-4q-0.48-0.48-1.088-0.576t-1.12 0.128-0.864 0.736-0.352 1.12v1.984h-4q-1.376 0-2.592-0.576t-2.048-1.664q-0.704 2.048-1.984 3.68z"
				></path>
			</g></svg
		>
	</button>

	<ColorModal bind:colorModalVisible bind:savedColorsModalVisible />
	<SavedColorsModal bind:savedColorsModalVisible />
</div>
