<template>
	<div class="min-h-screen">
		<Nav />
		<main>
			<section class="lg:px-[15%] px-[5%] pt-20 h-screen relative flex  justify-center" style="background-image: url('/spain-cars-rental.jpg');background-repeat: no-repeat; background-size: cover; background-position: top;">
				<span class="overlay w-full h-full flex  justify-center items-top backdrop-brightness-50 absolute inset-0"></span>
				
		

			<div class="z-20">
  <div class="flex flex-col justify-center"> 
	<h1 
					class="lg:text-6xl text-4xl text-center leading-normal font-bold text-white mb-8"
				>
					<span class="text-[#bc0014]">All about</span> <br> <span class="text-[#ffbb01]"> Car Rental</span>  <br> <span class="text-[#bc0014]">In Spain </span> 
				</h1>

				<a href="https://www.discovercars.com/?a_aid=spainCars"
				target="_blank"
				rel="noopener"
  type="button"
  class=" text-center inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
  Book a car now 
</a>
  </div>
</div>
			
			</section>
			<section class="lg:px-[15%] px-[5%] lg:pt-20 pt-14">
				<p
					class="text-center uppercase font-medium tracking-wider mb-10 text-gray-500"
				>
					Blog Posts
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
					<template
						v-for="(b, i) in blogNav[0].children"
						:key="`blogNavItem-${b._path}-${i}`"
					>
						<div class="px-7 py-5 rounded-lg border-2">
							<h2 class="text-lg font-semibold rainbow-text">
								{{ b.title }}
							</h2>
							<!-- Loop over files inside the content dir -->
							<ul
								v-if="b.children"
								class="list-disc list-inside mt-4 pl-2 space-y-3"
							>
								<template
									v-for="(child, k) in b.children"
									:key="`childNav-${child._path}-${k}-${i}`"
								>
									<li
										class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
									>
										<NuxtLink :to="`/blog${child._path}`">
											{{ child.title }}
										</NuxtLink>
									</li>
								</template>
							</ul>
							<ul v-else class="list-disc list-inside mt-4 pl-2 space-y-3">
								<li
									class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
								>
									<NuxtLink :to="`/blog${b._path}`"> Read </NuxtLink>
								</li>
							</ul>
						</div>
					</template>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>
	const { data: blogNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("blog"));
	});
	useHead({
		title: "Content Blog",
	});
</script>
