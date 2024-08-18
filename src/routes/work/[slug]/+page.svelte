<script lang="ts">
	import { page } from '$app/stores';
	import { WORK_DATA, type WorkCategory } from '$lib/constants/WorkData';

	const workData = WORK_DATA[$page.params.slug as WorkCategory];
</script>

<main class="primary-font">
	<!-- <h1 class="text-center text-3xl">Sample page</h1> -->
	<h1 class="font-bold text-3xl text-center mt-8">{workData.title}</h1>
	<div id="work-items" class="p-8">
		{#each workData.content as item}
			<div
				class="w-full flex flex-col md:flex-row gap-2 hover-tertiary-background-50 hover:bg-opacity-30 p-2"
				style={item.link ? 'cursor: pointer' : undefined}
				role={item.link ? 'link' : undefined}
				on:click={item.link
					? () => {
							window.open(item.link, '_blank');
						}
					: undefined}
				on:keydown={item.link
					? () => {
							window.open(item.link, '_blank');
						}
					: undefined}
			>
				<img src={item.image} alt="item" class="w-[100%] md:w-[300px] h-[200px] object-cover" />
				<h3 class="font-bold text-xl">{item.title}</h3>
				{#if item.description}
					<p class="line-clamp-3 md:line-clamp-5">{item.description}</p>
				{/if}
			</div>
		{/each}
	</div>
</main>
