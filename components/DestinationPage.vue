<script setup>
import jsonData from '~/static/data.json'
const route = useRoute()
const destination = ref({})
const links = ref([])

jsonData.destinations.forEach(object => {
  if(object.name.toLowerCase() === route.path.split('/')[2]) {
    destination.value = object
  }
  links.value.push(`/destination/${object.name.toLowerCase()}`)
})
</script>

<template>
  <article class="w-full h-full p-16 flex flex-col justify-between">
    <h5 class="uppercase flex flex-row"><strong class="w-12 opacity-25">01</strong><p>Pick your destination</p></h5>
    <section class="p-8 xl:p-16 w-full h-full flex flex-col xl:flex-row justify-between items-center">
      <img class="w-[170px] h-[170px] md:w-[300px] md:h-[300px] xl:w-[445px] xl:h-[445px]" :src="destination.images.webp" :alt="destination.name" />
      <article class="flex flex-col items-center text-center xl:text-left xl:items-start w-full xl:w-[445px] gap-8">
        <nav class="flex flex-row gap-6">
          <NuxtLink v-for="(link, index) in links" :key="index" class="border-white border-b-[3px] border-opacity-0 h-10" :class="{'text-blue hover:border-opacity-50': !route.path.includes(link.split('/')[2]), 'text-white border-opacity-100': route.path.includes(link.split('/')[2])}" :to="link">
            <p class="uppercase">{{ link.split('/')[2] }}</p>
          </NuxtLink>
        </nav>
        <h2 class="uppercase">{{ destination.name }}</h2>
        <p class="text-blue">{{ destination.description }}</p>
        <Line class="w-full" />
        <section class="flex flex-col md:flex-row md:w-full gap-6 xl:gap-0 justify-center xl:justify-between">
          <article class="flex flex-col gap-[12px]">
            <small class="uppercase text-blue">Avg. distance</small>
            <h6 class="uppercase">{{ destination.distance }}</h6>
          </article>
          <article class="flex flex-col gap-[12px]">
            <small class="uppercase text-blue">Est. travel time</small>
            <h6 class="uppercase">{{ destination.travel }}</h6>
          </article>
        </section>
      </article>
    </section>
  </article>
</template>