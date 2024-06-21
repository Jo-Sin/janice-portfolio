<script lang="ts">
	import { savedColorsStore } from '$lib/stores/SavedColors';
	import { selectedColorsStore } from '$lib/stores/SelectedColors';
	import Modal from './Modal.svelte';

	export let savedColorsModalVisible: boolean;

	let selection = 0;
	let deleteModalVisible = false;
	let closeDeleteModal: () => void;

	const updateColorPalette = () => {
		selectedColorsStore.set({
			colorPrimary: $savedColorsStore[selection].primary,
			colorSecondary: $savedColorsStore[selection].secondary,
			colorSecondary50: $savedColorsStore[selection].secondary + '80',
			colorTertiary: $savedColorsStore[selection].tertiary,
			colorTertiary50: $savedColorsStore[selection].tertiary + '80'
		});
	};

	const deletePalette = () => {
		savedColorsStore.set(
			$savedColorsStore.slice(0, selection).concat($savedColorsStore.slice(selection + 1))
		);
		closeDeleteModal();
	};
</script>

<Modal bind:showModal={savedColorsModalVisible}>
	<p slot="header">Saved Colors</p>
	<div class="p-3 flex flex-col gap-1">
		{#each $savedColorsStore as option, indx}
			<button
				class="flex justify-between items-center p-1 {indx === selection
					? 'bg-gray-300'
					: 'hover:bg-gray-200'} cursor-pointer"
				on:click={() => (selection = indx)}
			>
				<p>{option.name}</p>
				<div class="flex gap-1">
					<div
						class="border border-gray-200 w-8 h-8"
						style="background-color:{option.primary}"
					></div>
					<div
						class="border border-gray-200 w-8 h-8"
						style="background-color:{option.secondary}"
					></div>
					<div
						class="border border-gray-200 w-8 h-8"
						style="background-color:{option.tertiary}"
					></div>
				</div>
			</button>
		{/each}
	</div>
	<div slot="footer" class="flex justify-end gap-3 p-3">
		<button class="border-black border-2 px-2 py-1" on:click={() => (deleteModalVisible = true)}
			>Delete</button
		>
		<button class="border-black border-2 px-2 py-1" on:click={updateColorPalette}>Select</button>
	</div>
</Modal>

<Modal bind:showModal={deleteModalVisible} bind:closeModal={closeDeleteModal}>
	<p>Are you sure?</p>
	<div slot="footer" class="flex justify-end gap-3 p-3">
		<button class="border-black border-2 px-2 py-1" on:click={closeDeleteModal}>Cancel</button>
		<button class="border-black border-2 px-2 py-1" on:click={deletePalette}>Delete</button>
	</div>
</Modal>
