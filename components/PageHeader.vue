<script setup>
const route = useRoute()
</script>
<template>
  <div class="flex flex-row ml-[55px] relative top-[40px] items-center">
    <NuxtLink class="rounded-full" to="/">
      <img class="w-[48px] h-[48px]" src="/assets/images/shared/logo.svg" alt="Logo" />
    </NuxtLink>
    <div class="flex flex-row ml-auto w-full items-center justify-end">
      <div class="h-px bg-white opacity-25 w-[473px] z-10" />
      <nav class="flex flex-row h-[96px] w-[830px] gap-[48px] bg-header backdrop-blur-[32px] justify-center ml-[-30px]">
        <NuxtLink class="flex flex-row w-fit h-full items-center border-white border-b-[3px] border-opacity-0" to="/"
          :class="{ 'hover:border-opacity-50': route.path !== '/', 'border-opacity-100': route.path === '/' }">
          <strong class="w-[29px]">00</strong>
          <p class="uppercase">Home</p>
        </NuxtLink>
        <NuxtLink class="flex flex-row w-fit h-full items-center border-white border-b-[3px] border-opacity-0"
          to="/destination/moon"
          :class="{ 'hover:border-opacity-50': !route.path.includes('/destination'), 'border-opacity-100': route.path.startsWith('/destination') }">
          <strong class="w-[29px]">01</strong>
          <p class="uppercase">Destination</p>
        </NuxtLink>
        <NuxtLink class="flex flex-row w-fit h-full items-center border-white border-b-[3px] border-opacity-0"
          to="/crew/commander"
          :class="{ 'hover:border-opacity-50': !route.path.includes('/crew'), 'border-opacity-100': route.path.startsWith('/crew') }">
          <strong class="w-[29px]">02</strong>
          <p class="uppercase">Crew</p>
        </NuxtLink>
        <NuxtLink class="flex flex-row w-fit h-full items-center border-white border-b-[3px] border-opacity-0"
          to="/technology/vehicle"
          :class="{ 'hover:border-opacity-50': !route.path.includes('/technology'), 'border-opacity-100': route.path.startsWith('/technology') }">
          <strong class="w-[29px]">03</strong>
          <p class="uppercase">Technology</p>
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>