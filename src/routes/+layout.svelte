<script lang="ts">
	import '../app.css';

	const styling: Styling = {
		colorPrimary: '#006D77',
		colorSecondary: '#9DC5BB',
		colorSecondary50: '#9DC5BB80',
		colorTertiary: '#ca8a04',
		colorTertiary30: '#ca8a044d'
	};

	$: cssVarStyles = `--color-primary:${styling.colorPrimary}; --color-secondary:${styling.colorSecondary}; --color-secondary-50:${styling.colorSecondary50}; --color-tertiary:${styling.colorTertiary}; --color-tertiary-30:${styling.colorTertiary30}`;

	let colorOptions = [
		{
			name: 'Primary',
			color: '#006D77',
			update: (event: Event) => {
				const newColor = (event?.target as HTMLInputElement)?.value;
				styling.colorPrimary = newColor;
			}
		},
		{
			name: 'Secondary',
			color: '#9DC5BB',
			update: (event: Event) => {
				const newColor = (event?.target as HTMLInputElement)?.value;
				styling.colorSecondary = newColor;
				styling.colorSecondary50 = newColor + '80';
			}
		},
		{
			name: 'Tertiary',
			color: '#ca8a04',
			update: (event: Event) => {
				const newColor = (event?.target as HTMLInputElement)?.value;
				styling.colorTertiary = newColor;
				styling.colorTertiary30 = newColor + '4D';
			}
		}
	];

	let mobileDropdownActive = false;
	let colorModalVisible = false;

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
		class="fixed bottom-12 right-12 bg-yellow-600 hover:bg-yellow-700 p-1 w-10 h-10"
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

	<div
		class="{colorModalVisible
			? ''
			: 'hidden'} bg-white shadow-lg shadow-black my-auto p-2 min-w-64 fixed bottom-3 right-3"
	>
		<div class="p-3">
			<p>Select colors</p>
			<button
				on:click={() => {
					colorModalVisible = false;
				}}
				class="absolute right-5 top-5 w-8 h-8"
			>
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
					><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g><g id="SVGRepo_iconCarrier">
						<path
							d="M8.00191 9.41621C7.61138 9.02569 7.61138 8.39252 8.00191 8.002C8.39243 7.61147 9.0256 7.61147 9.41612 8.002L12.0057 10.5916L14.5896 8.00771C14.9801 7.61719 15.6133 7.61719 16.0038 8.00771C16.3943 8.39824 16.3943 9.0314 16.0038 9.42193L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.004C15.6133 16.3945 14.9802 16.3945 14.5896 16.004L12.0057 13.42L9.42192 16.0038C9.03139 16.3943 8.39823 16.3943 8.00771 16.0038C7.61718 15.6133 7.61718 14.9801 8.00771 14.5896L10.5915 12.0058L8.00191 9.41621Z"
							fill="#0F0F0F"
						></path>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
							fill="#0F0F0F"
						></path>
					</g></svg
				>
			</button>
		</div>
		<hr />
		<div class="p-3">
			{#each colorOptions as option}
				<div class="flex justify-between items-center">
					<p>{option.name}</p>
					<input
						type="color"
						class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700"
						id="hs-color-input"
						value={option.color}
						on:input={option.update}
						title="Choose your color"
					/>
				</div>
			{/each}
		</div>
		<hr />
		<div class="p-3 flex justify-between">
			<button class="border-black border-2 px-2 py-1">Preset</button>
			<button class="border-black border-2 px-2 py-1">Save</button>
		</div>
	</div>
</div>
