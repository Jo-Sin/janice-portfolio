<script lang="ts">
	import { savedColorsStore } from '$lib/stores/SavedColors';
	import { selectedColorsStore } from '$lib/stores/SelectedColors';
	import Modal from './Modal.svelte';

	export let colorModalVisible: boolean;
	export let savedColorsModalVisible: boolean;

	let showSaveModal = false;
	let closeSaveModal: () => void;
	let paletteName = '';
	let colorOptions: ColorOptionsType[] = [
		{
			name: 'Primary',
			color: $selectedColorsStore.colorPrimary,
			update: (event) => {
				const newColor = (event?.target as HTMLInputElement)?.value;
				selectedColorsStore.set({
					...$selectedColorsStore,
					colorPrimary: newColor
				});
			}
		},
		{
			name: 'Secondary',
			color: $selectedColorsStore.colorSecondary,
			update: (event) => {
				const newColor = (event?.target as HTMLInputElement)?.value;
				selectedColorsStore.set({
					...$selectedColorsStore,
					colorSecondary: newColor,
					colorSecondary50: newColor + '80'
				});
			}
		},
		{
			name: 'Tertiary',
			color: $selectedColorsStore.colorTertiary,
			update: (event) => {
				const newColor = (event?.target as HTMLInputElement)?.value;
				selectedColorsStore.set({
					...$selectedColorsStore,
					colorTertiary: newColor,
					colorTertiary50: newColor + '80'
				});
			}
		}
	];

	selectedColorsStore.subscribe((value) => {
		colorOptions[0].color = value.colorPrimary;
		colorOptions[1].color = value.colorSecondary;
		colorOptions[2].color = value.colorTertiary;
	});

	const savePalette = () => {
		if (paletteName.length < 3) {
			alert('Name not long enough');
			return;
		}
		if ($savedColorsStore.map((x) => x.name).includes(paletteName)) {
			alert('Name already used. Try another one.');
			return;
		}
		savedColorsStore.set([
			...$savedColorsStore,
			{
				name: paletteName,
				primary: $selectedColorsStore.colorPrimary,
				secondary: $selectedColorsStore.colorSecondary,
				tertiary: $selectedColorsStore.colorTertiary
			}
		]);
		closeSaveModal();
		paletteName = '';
	};
</script>

{#if colorModalVisible}
	<div class="bg-white shadow-lg shadow-black my-auto p-2 min-w-64 fixed bottom-3 right-3">
		<div class="p-3">
			<p>Select colors</p>
			<button
				on:click={() => {
					colorModalVisible = false;
				}}
				class="absolute right-4 top-4 w-8 h-8"
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
						id="color-input-{option.name}"
						value={option.color}
						on:input={option.update}
						title="Choose your color"
					/>
				</div>
			{/each}
		</div>
		<hr />
		<div class="p-3 flex justify-between">
			<button
				class="border-black border-2 px-2 py-1"
				on:click={() => (savedColorsModalVisible = true)}>Choose</button
			>
			<button class="border-black border-2 px-2 py-1" on:click={() => (showSaveModal = true)}
				>Save</button
			>
		</div>
	</div>
{/if}

<Modal bind:showModal={showSaveModal} bind:closeModal={closeSaveModal}>
	<div class="p-3">
		<p class="mb-2">Give a name to the current color palette:</p>
		<input type="text" bind:value={paletteName} class="w-full" />
	</div>
	<div slot="footer" class="p-3 flex justify-between">
		<button class="border-black border-2 px-2 py-1" on:click={closeSaveModal}>Cancel</button>
		<button class="border-black border-2 px-2 py-1" on:click={savePalette}>Save</button>
	</div>
</Modal>
