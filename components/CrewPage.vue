<script setup>
import jsonData from '~/static/data.json'
const route = useRoute()
const crew = ref({})
const links = ref([])

jsonData.crew.forEach(object => {
  let roleWords = object.role.split(' ')
  let lastWord = roleWords[roleWords.length - 1]
  if(lastWord.toLowerCase() === route.path.split('/')[2]) {
    crew.value = object
  }
  links.value.push(`/crew/${lastWord.toLowerCase()}`)
})
</script>

<template>
  <article class="w-full h-full px-[10vw] py-[5vw] flex flex-col gap-36">
    <h5 class="uppercase flex flex-row"><strong class="w-[54px] opacity-25">02</strong>Meet your crew</h5>
    <section class="flex flex-col gap-4 w-[25rem] h-full">
      <article class="flex flex-col gap-2 whitespace-nowrap">
        <h4 class="opacity-50 uppercase">{{ crew.role }}</h4>
        <h3 class="uppercase">{{ crew.name }}</h3>
      </article>
      <p class="text-blue">{{ crew.bio }}</p>
      <nav class="flex flex-row gap-[24px] mt-auto mb-24">
        <NuxtLink v-for="(link, index) in links" :key="index" :to="link" class="rounded-full">
          <button class="w-[15px] h-[15px] rounded-full bg-white"
            :class="{ 'opacity-20': !route.path.includes(link.split('/')[2]), 'opacity-100': route.path.includes(link.split('/')[2]) }" />
        </NuxtLink>
      </nav>
    </section>
    <img :src="crew.images.webp" class="absolute bottom-0 right-[8vw]" :alt="crew.role + ' ' + crew.name" />
  </article>
</template>