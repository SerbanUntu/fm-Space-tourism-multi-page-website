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
  <article class="w-full h-full px-[10vw] py-[5vw] flex flex-col gap-48">
    <h5 class="uppercase flex flex-row"><strong class="w-[54px] opacity-25">03</strong>Space launch 101</h5>
    <section class="flex flex-row gap-[80px] w-full">
      <nav class="flex flex-col w-fit gap-[32px]">
        <NuxtLink v-for="(link, index) in links" :to="link" :key="index" class="rounded-full">
          <button class="w-[40px] h-[40px] md:w-[60px] md:h-[60px] xl:w-[80px] xl:h-[80px] flex items-center justify-center rounded-full border-[1px] border-white"
            :class="{ 'border-opacity-25 hover:border-opacity-100': !route.path.includes(link.split('/')[2]), 'text-black bg-white': route.path.includes(link.split('/')[2]) }">
            <h4>{{ index + 1 }}</h4>
          </button>
        </NuxtLink>
      </nav>
      <article class="flex flex-col w-[25rem] gap-4">
        <section class="flex flex-col gap-2">
          <p class="uppercase font-barlow-condensed text-[16px] text-blue tracking-[2.7px]">The terminology...</p>
          <h3 class="uppercase whitespace-nowrap">{{ technology.name }}</h3>
        </section>
        <p class="text-blue">{{ technology.description }}</p>
      </article>
      <img class="w-[515px] h-[527px] ml-auto relative bottom-20 hidden xl:block" :src="technology.images.portrait" :alt="technology.name" />
      <img class="w-full h-[170px] md:h-[370px] ml-auto relative bottom-20 block xl:hidden" :src="technology.images.landscape" :alt="technology.name" />
    </section>
  </article>
</template>