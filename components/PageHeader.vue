<script setup>
const route = useRoute()
const showMenu = ref(false)
</script>
<template>
  <section class="flex flex-row ml-[3vw] mr-[3vw] md:mr-0 relative top-[3vh] md:top-0 xl:top-[3vh] items-center">
    <NuxtLink class="rounded-full flex shrink-0" to="/">
      <img class="w-[48px] h-[48px] shrink-0" src="/assets/images/shared/logo.svg" alt="Logo" />
    </NuxtLink>
    <article class="flex flex-row ml-auto w-full items-center justify-end">
      <Line class="hidden xl:block" />
      <nav
        class="flex-row h-[96px] hidden md:flex md:w-[450px] xl:w-[830px] bg-header backdrop-blur-[32px] justify-between md:px-10  xl:px-20 ml-[-30px] shrink-0">
        <NuxtLink class="flex flex-row w-fit h-full items-center border-white border-b-[3px] border-opacity-0" to="/"
          :class="{ 'hover:border-opacity-50': route.path !== '/', 'border-opacity-100': route.path === '/' }">
          <strong class="hidden w-[29px] xl:block">00</strong>
          <p class="uppercase">Home</p>
        </NuxtLink>
        <NuxtLink class="flex flex-row w-fit h-full items-center border-white border-b-[3px] border-opacity-0"
          to="/destination/moon"
          :class="{ 'hover:border-opacity-50': !route.path.includes('/destination'), 'border-opacity-100': route.path.startsWith('/destination') }">
          <strong class="hidden w-[29px] xl:block">01</strong>
          <p class="uppercase">Destination</p>
        </NuxtLink>
        <NuxtLink class="flex flex-row w-fit h-full items-center border-white border-b-[3px] border-opacity-0"
          to="/crew/commander"
          :class="{ 'hover:border-opacity-50': !route.path.includes('/crew'), 'border-opacity-100': route.path.startsWith('/crew') }">
          <strong class="hidden w-[29px] xl:block">02</strong>
          <p class="uppercase">Crew</p>
        </NuxtLink>
        <NuxtLink class="flex flex-row w-fit h-full items-center border-white border-b-[3px] border-opacity-0"
          to="/technology/vehicle"
          :class="{ 'hover:border-opacity-50': !route.path.includes('/technology'), 'border-opacity-100': route.path.startsWith('/technology') }">
          <strong class="hidden w-[29px] xl:block">03</strong>
          <p class="uppercase">Technology</p>
        </NuxtLink>
      </nav>
    </article>
    <button @click="showMenu = true">
      <img class="block md:hidden" src="/assets/images/shared/icon-hamburger.svg" alt="Open hamburger menu" />
    </button>
  </section>
  <article
    class="flex md:hidden absolute right-0 top-0 h-screen bg-header backdrop-blur-[32px] w-[250px] transition-all duration-200 z-20 p-10 pt-28"
    :class="{'translate-x-[250px]': !showMenu}">
    <nav
      class="flex flex-col gap-4">
      <NuxtLink class="flex flex-row h-fit w-fit items-center border-white border-b-[3px] border-opacity-0" to="/"
        :class="{ 'hover:border-opacity-50': route.path !== '/', 'border-opacity-100': route.path === '/' }">
        <strong class="block md:hidden w-[29px] xl:block">00</strong>
        <p class="uppercase">Home</p>
      </NuxtLink>
      <NuxtLink class="flex flex-row h-fit w-fit items-center border-white border-b-[3px] border-opacity-0"
        to="/destination/moon"
        :class="{ 'hover:border-opacity-50': !route.path.includes('/destination'), 'border-opacity-100': route.path.startsWith('/destination') }">
        <strong class="block md:hidden w-[29px] xl:block">01</strong>
        <p class="uppercase">Destination</p>
      </NuxtLink>
      <NuxtLink class="flex flex-row h-fit w-fit items-center border-white border-b-[3px] border-opacity-0"
        to="/crew/commander"
        :class="{ 'hover:border-opacity-50': !route.path.includes('/crew'), 'border-opacity-100': route.path.startsWith('/crew') }">
        <strong class="block md:hidden w-[29px] xl:block">02</strong>
        <p class="uppercase">Crew</p>
      </NuxtLink>
      <NuxtLink class="flex flex-row h-fit w-fit items-center border-white border-b-[3px] border-opacity-0"
        to="/technology/vehicle"
        :class="{ 'hover:border-opacity-50': !route.path.includes('/technology'), 'border-opacity-100': route.path.startsWith('/technology') }">
        <strong class="block md:hidden w-[29px] xl:block">03</strong>
        <p class="uppercase">Technology</p>
      </NuxtLink>
    </nav>
    <button class="absolute top-[5vh] right-[3vw]" @click="showMenu = false">
      <img src="/assets/images/shared/icon-close.svg" alt="Close hamburger menu" />
    </button>
  </article>
</template>