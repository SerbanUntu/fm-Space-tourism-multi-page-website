<script setup>
const route = useRoute()
const showMenu = ref(false)
const entries = [
  { link: '/', regex: '^/$' },
  { link: '/destination', regex: '^/destination' },
  { link: '/crew', regex: '^/crew' },
  { link: '/technology', regex: '^/technology' },
]
</script>
<template>
  <section class="flex flex-row ml-[3vw] mr-[3vw] md:mr-0 relative top-[3vh] md:top-0 xl:top-[3vh] items-center">
    <NuxtLink class="rounded-full flex shrink-0" to="/">
      <img class="w-[48px] h-[48px] shrink-0" src="/images/shared/logo.svg" alt="Logo" />
    </NuxtLink>
    <article class="flex flex-row ml-auto w-full items-center justify-end">
      <Line class="hidden xl:block" />
      <nav
        class="flex-row h-[96px] hidden md:flex md:w-[450px] xl:w-[830px] bg-header backdrop-blur-[32px] justify-between md:px-10  xl:px-20 ml-[-30px] shrink-0">
        <NuxtLink v-for="(entry, index) in entries" class="flex flex-row w-fit h-full items-center border-white border-b-[3px] border-opacity-0" :to="entry.link"
          :class="{ 'hover:border-opacity-50': !route.path.match(entry.regex), 'border-opacity-100': route.path.match(entry.regex) }">
          <strong class="hidden w-[29px] xl:block">{{ '0' + index.toString() }}</strong>
          <p class="uppercase">{{ entry.link === '/' ? 'Home' : entry.link.slice(1) }}</p>
        </NuxtLink>
      </nav>
    </article>
    <button @click="showMenu = true">
      <img class="block md:hidden" src="/images/shared/icon-hamburger.svg" alt="Open hamburger menu" />
    </button>
  </section>
  <article
    class="flex md:hidden absolute right-0 top-0 h-screen bg-header backdrop-blur-[32px] w-[250px] transition-all duration-200 z-20 p-10 pt-28"
    :class="{'translate-x-[250px]': !showMenu}">
    <nav class="flex flex-col gap-4">
      <NuxtLink v-for="(entry, index) in entries" class="flex flex-row h-fit w-fit items-center border-white border-b-[3px] border-opacity-0" :to="entry.link"
        :class="{ 'hover:border-opacity-50': !route.path.match(entry.regex), 'border-opacity-100': route.path.match(entry.regex) }">
        <strong class="w-[29px]">{{ '0' + index.toString() }}</strong>
        <p class="uppercase">{{ entry.link === '/' ? 'Home' : entry.link.slice(1) }}</p>
      </NuxtLink>
    </nav>
    <button class="absolute top-[5vh] right-[3vw]" @click="showMenu = false">
      <img src="/images/shared/icon-close.svg" alt="Close hamburger menu" />
    </button>
  </article>
</template>