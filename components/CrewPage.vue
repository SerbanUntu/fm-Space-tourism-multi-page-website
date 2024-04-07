<script setup>
import jsonData from '~/static/data.json'
const route = useRoute()
const crew = ref({})
const links = ref([])

jsonData.crew.forEach(object => {
  let roleWords = object.role.split(' ')
  let lastWord = roleWords[roleWords.length - 1]
  if (lastWord.toLowerCase() === route.path.split('/')[2]) {
    crew.value = object
  }
  links.value.push(`/crew/${lastWord.toLowerCase()}`)
})
</script>

<template>
  <article class="w-full h-full p-16 flex flex-col gap-16 xl:justify-between">
    <h5 class="uppercase flex flex-row"><strong class="w-12 opacity-25">02</strong>
      <p>Meet your crew</p>
    </h5>
    <article class="flex md:hidden flex-col w-full items-center justify-start">
      <img :src="crew.images.webp" class="shrink-0 h-[250px] object-cover" :alt="crew.role + ' ' + crew.name" />
    </article>
    <section class="flex flex-col gap-2 items-center text-center xl:items-start xl:text-start">
      <article class="flex flex-col whitespace-nowrap">
        <h4 class="opacity-50 uppercase">{{ crew.role }}</h4>
        <h3 class="uppercase">{{ crew.name }}</h3>
      </article>
      <p class="text-blue w-96">{{ crew.bio }}</p>
    </section>
    <nav class="flex flex-row gap-4 w-full justify-center xl:justify-start z-10">
      <NuxtLink v-for="(link, index) in links" :key="index" :to="link" class="rounded-full">
        <button class="w-[15px] h-[15px] rounded-full bg-white"
          :class="{ 'opacity-20': !route.path.includes(link.split('/')[2]), 'opacity-100': route.path.includes(link.split('/')[2]) }" />
      </NuxtLink>
    </nav>
    <article class="hidden md:flex xl:hidden flex-col w-full items-center justify-start relative">
      <img :src="crew.images.webp" class="shrink-0 h-[532px] object-cover" :alt="crew.role + ' ' + crew.name" />
    </article>
    <img :src="crew.images.webp" class="absolute bottom-0 right-[8vw] hidden xl:block" :alt="crew.role + ' ' + crew.name" />
  </article>
</template>