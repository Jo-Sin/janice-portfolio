<script lang="ts">
	import { WORK_DATA } from '$lib/constants/WorkData';

	const workSecstions: WorkItem[] = [
		{
			title: 'Content writing',
			content: [
				{
					image: 'https://cdn.pixabay.com/photo/2024/01/15/19/40/animal-8510775_1280.jpg',
					title: 'Item 1',
					description: 'Lorem ipsum dolor sit amet'
				},
				{
					image: 'https://cdn.pixabay.com/photo/2024/01/18/14/26/white-8517052_1280.jpg',
					title: 'Item 2',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed ex ut sapien rutrum elementum eget id magna. Aliquam erat volutpat. Nunc faucibus augue urna, sed tempus libero lobortis eget. Mauris vitae velit sapien. In sollicitudin pulvinar dictum. Nulla id eros dignissim, lobortis turpis in, tristique ex. Aliquam vitae odio nulla.'
				},
				{
					image: 'https://cdn.pixabay.com/photo/2023/05/25/07/38/antarctica-8016562_1280.jpg',
					title: 'Item 3',
					description: 'Lorem ipsum dolor sit amet'
				}
			]
		},
		{
			title: 'Video',
			content: [
				{
					image: 'https://cdn.pixabay.com/photo/2024/01/15/19/40/animal-8510775_1280.jpg',
					title: 'Item 1',
					description: 'Lorem ipsum dolor sit amet'
				}
			]
		},
		{
			title: 'Radio',
			content: [
				{
					image: 'https://cdn.pixabay.com/photo/2024/01/15/19/40/animal-8510775_1280.jpg',
					title: 'Item 1',
					description: 'Lorem ipsum dolor sit amet'
				}
			]
		}
	];
</script>

<main class="primary-font">
	{#each Object.entries(WORK_DATA) as [key, value], i}
		<section class="flex flex-col items-center p-8 {i % 2 == 1 ? 'secondary-background' : ''}">
			<h2 class="font-bold text-3xl text-center">{value.title}</h2>
			<div class="my-8 w-full flex flex-wrap gap-4 justify-center">
				{#each value.content.slice(0, 3) as item}
					<div
						class="w-full md:w-1/4 hover-tertiary-background-50 hover:bg-opacity-30 p-1"
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
						<img src={item.image} alt="item" class="w-[100%] h-[200px] object-cover" />
						<h3 class="font-bold text-xl py-2">{item.title}</h3>
						{#if item.description}
							<p class="line-clamp-3 md:line-clamp-5">{item.description}</p>
						{/if}
					</div>
				{/each}
			</div>
			{#if value.content.length > 3}
				<a
					href={`/work/${key}`}
					class="tertiary-border border-2 tertiary-font hover-tertiary-background hover:text-white py-3.5 px-7"
					>See All</a
				>
			{/if}
		</section>
	{/each}
</main>
