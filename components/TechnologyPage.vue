<script setup>
import jsonData from '~/static/data.json'
const route = useRoute()
const technology = ref({})
const links = ref([])

jsonData.technology.forEach(object => {
  let nameWords = object.name.split(' ')
  let lastWord = nameWords[nameWords.length - 1]
  if(lastWord.toLowerCase() === route.path.split('/')[2]) {
    technology.value = object
  }
  links.value.push(`/technology/${lastWord.toLowerCase()}`)
})
</script>

<template>
  <article class="w-full xl:p-16 h-full flex flex-col gap-4 xl:gap-48">
    <h5 class="uppercase flex flex-row mt-16 ml-16 xl:m-0"><strong class="w-12 opacity-25">03</strong><p>Space launch 101</p></h5>
    <section class="flex flex-col xl:flex-row gap-8 xl:gap-16 w-full items-center xl:items-start">
      <img class="w-full h-[170px] md:h-[370px] block xl:hidden object-cover" :src="technology.images.landscape" :alt="technology.name" />
      <nav class="flex flex-row xl:flex-col w-fit gap-3 xl:gap-6">
        <NuxtLink v-for="(link, index) in links" :to="link" :key="index" class="rounded-full">
          <button class="w-[40px] h-[40px] md:w-[60px] md:h-[60px] xl:w-[80px] xl:h-[80px] flex items-center justify-center rounded-full border-[1px] border-white"
            :class="{ 'border-opacity-25 hover:border-opacity-100': !route.path.includes(link.split('/')[2]), 'text-black bg-white': route.path.includes(link.split('/')[2]) }">
            <h4>{{ index + 1 }}</h4>
          </button>
        </NuxtLink>
      </nav>
      <article class="flex flex-col w-96 gap-4 items-center xl:items-start text-center xl:text-start">
        <section class="flex flex-col gap-2">
          <p class="uppercase font-barlow-condensed text-[16px] text-blue tracking-[2.7px]">The terminology...</p>
          <h3 class="uppercase whitespace-nowrap">{{ technology.name }}</h3>
        </section>
        <p class="text-blue">{{ technology.description }}</p>
      </article>
      <img class="w-[515px] h-[527px] ml-auto relative bottom-20 hidden xl:block" :src="technology.images.portrait" :alt="technology.name" />
    </section>
  </article>
</template>