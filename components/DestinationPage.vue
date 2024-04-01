<script setup>
const route = useRoute()
</script>

<template>
  <article class="w-full h-full px-[10vw] py-[5vw] flex flex-col justify-between">
    <h5 class="uppercase flex flex-row"><strong class="w-[54px] opacity-25">01</strong>Pick your destination</h5>
    <section class="p-[5vw] w-full h-full flex flex-col xl:flex-row justify-between items-center">
      <img class="w-[170px] h-[170px] md:w-[300px] md:h-[300px] xl:w-[445px] xl:h-[445px]" v-if="route.path.includes('moon')" src="/assets/images/destination/image-moon.webp" alt="The Moon" />
      <img class="w-[170px] h-[170px] md:w-[300px] md:h-[300px] xl:w-[445px] xl:h-[445px]" v-if="route.path.includes('mars')" src="/assets/images/destination/image-mars.webp" alt="The planet Mars" />
      <img class="w-[170px] h-[170px] md:w-[300px] md:h-[300px] xl:w-[445px] xl:h-[445px]" v-if="route.path.includes('europa')" src="/assets/images/destination/image-europa.webp"
        alt="Europa, satellite of Jupiter" />
      <img class="w-[170px] h-[170px] md:w-[300px] md:h-[300px] xl:w-[445px] xl:h-[445px]" v-if="route.path.includes('titan')" src="/assets/images/destination/image-titan.webp"
        alt="Titan, Saturn's largest satellite" />
      <article class="flex flex-col items-center text-center xl:text-left xl:items-start w-full xl:w-[445px] gap-8">
        <nav class="flex flex-row gap-[32px]">
          <NuxtLink class="border-white border-b-[3px] border-opacity-0 h-10" :class="{'text-blue hover:border-opacity-50': !route.path.includes('moon'), 'text-white border-opacity-100': route.path.includes('moon')}" to="/destination/moon">
            <p class="uppercase">Moon</p>
          </NuxtLink>
          <NuxtLink class="border-white border-b-[3px] border-opacity-0 h-10" :class="{'text-blue hover:border-opacity-50': !route.path.includes('mars'), 'text-white border-opacity-100': route.path.includes('mars')}" to="/destination/mars">
            <p class="uppercase">Mars</p>
          </NuxtLink>
          <NuxtLink class="border-white border-b-[3px] border-opacity-0 h-10" :class="{'text-blue hover:border-opacity-50': !route.path.includes('europa'), 'text-white border-opacity-100': route.path.includes('europa')}" to="/destination/europa">
            <p class="uppercase">Europa</p>
          </NuxtLink>
          <NuxtLink class="border-white border-b-[3px] border-opacity-0 h-10" :class="{'text-blue hover:border-opacity-50': !route.path.includes('titan'), 'text-white border-opacity-100': route.path.includes('titan')}" to="/destination/titan">
            <p class="uppercase">Titan</p>
          </NuxtLink>
        </nav>
        <h2 class="uppercase">{{ route.path.split('/')[2] }}</h2>
        <p v-if="route.path.includes('moon')" class="text-blue">
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come
          back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <p v-if="route.path.includes('mars')" class="text-blue">
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in
          our solar system. It’s two and a half times the size of Everest!
        </p>
        <p v-if="route.path.includes('europa')" class="text-blue">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface,
          it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
        </p>
        <p v-if="route.path.includes('titan')" class="text-blue">
          The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few
          hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
        </p>
        <Line class="w-full" />
        <section class="flex flex-col md:flex-row md:w-full gap-[20vw] xl:gap-0 justify-center xl:justify-between">
          <article class="flex flex-col gap-[12px]">
            <small class="uppercase text-blue">Avg. distance</small>
            <h6 v-if="route.path.includes('moon')" class="uppercase">384,400 km</h6>
            <h6 v-if="route.path.includes('mars')" class="uppercase">225 mil. km</h6>
            <h6 v-if="route.path.includes('europa')" class="uppercase">628 mil. km</h6>
            <h6 v-if="route.path.includes('titan')" class="uppercase">1.6 bil. km</h6>
          </article>
          <article class="flex flex-col gap-[12px]">
            <small class="uppercase text-blue">Est. travel time</small>
            <h6 v-if="route.path.includes('moon')" class="uppercase">3 days</h6>
            <h6 v-if="route.path.includes('mars')" class="uppercase">9 months</h6>
            <h6 v-if="route.path.includes('europa')" class="uppercase">3 years</h6>
            <h6 v-if="route.path.includes('titan')" class="uppercase">7 years</h6>
          </article>
        </section>
      </article>
    </section>
  </article>
</template>