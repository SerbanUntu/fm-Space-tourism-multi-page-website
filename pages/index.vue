<template>
  <main class="w-screen h-screen bg-home-mobile md:bg-home-tablet xl:bg-home-desktop bg-cover relative flex flex-col pt-4 md:pt-0 xl:pt-4 justify-between">
    <PageHeader />
    <section class="flex flex-col xl:flex-row h-full xl:w-full gap-16 md:justify-between items-center p-24 text-center xl:text-start">
      <article class="flex flex-col gap-[24px] w-96 items-center xl:items-start">
        <h5 class="uppercase text-blue">So, you want to travel to</h5>
        <h1 class="uppercase">Space</h1>
        <p class="text-blue">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </article>
      <ExploreButton />
    </section>
  </main>
</template>