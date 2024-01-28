<script>
	import { getContext } from 'svelte';

	const styling = getContext('styling');

	const workSections = [
		{
			title: 'Investigative reporting',
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
				},
				{
					image: 'https://cdn.pixabay.com/photo/2023/10/30/07/30/lake-8352059_1280.jpg',
					title: 'Item 4',
					description: 'Lorem ipsum dolor sit amet'
				}
			],
			pageUrl: '/work/placeholder'
		},
		{
			title: 'News articles',
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
				}
			],
			pageUrl: '/work/placeholder'
		},
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

<main class={$styling.textPrimary}>
	<section
		class="flex flex-col items-center justify-center bg-[url('/paper.jpg')] bg-cover min-h-60 p-8"
	>
		<h1 class="font-bold text-3xl">Work</h1>
		<p class="mt-4">Some of the things I've done</p>
	</section>

	{#each workSections as workSection, i}
		<section
			class="flex flex-col items-center p-8 {i % 2 == 1
				? $styling.bgPrimaryLight
				: ''} bg-opacity-50"
		>
			<h2 class="font-bold text-3xl">{workSection.title}</h2>
			<div class="my-8 w-full flex flex-wrap gap-4 justify-center">
				{#each workSection.content as item}
					<div class="w-full md:w-1/4 {$styling.hoverBgSecondary} hover:bg-opacity-30 p-1">
						<img src={item.image} alt="item" class="w-[100%] h-[200px] object-cover" />
						<h3 class="font-bold text-xl py-2">{item.title}</h3>
						<p class="line-clamp-3 md:line-clamp-5">{item.description}</p>
					</div>
				{/each}
			</div>
			{#if workSection.pageUrl}
				<a
					href={workSection.pageUrl}
					class="{$styling.borderSecondary} border-2 {$styling.textSecondary} {$styling.hoverBgSecondary} hover:text-white py-3.5 px-7"
					>See All</a
				>
			{/if}
		</section>
	{/each}
</main>
