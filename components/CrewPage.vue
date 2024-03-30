<script setup>
const route = useRoute()
</script>

<template>
  <div class="w-full h-full px-[10vw] py-[5vw] flex flex-col gap-36">
    <h5 class="uppercase flex flex-row"><strong class="w-[54px] opacity-25">02</strong>Meet your crew</h5>
    <div class="flex flex-col gap-4 w-[25rem] h-full">
      <div class="flex flex-col gap-2 whitespace-nowrap">
        <h4 v-if="route.path.includes('commander')" class="opacity-50 uppercase">Commander</h4>
        <h4 v-if="route.path.includes('engineer')" class="opacity-50 uppercase">Flight Engineer</h4>
        <h4 v-if="route.path.includes('pilot')" class="opacity-50 uppercase">Pilot</h4>
        <h4 v-if="route.path.includes('specialist')" class="opacity-50 uppercase">Mission Specialist</h4>
        <h3 v-if="route.path.includes('commander')" class="uppercase">Douglas Hurley</h3>
        <h3 v-if="route.path.includes('engineer')" class="uppercase">Anousheh Ansari</h3>
        <h3 v-if="route.path.includes('pilot')" class="uppercase">Victor Glover</h3>
        <h3 v-if="route.path.includes('specialist')" class="uppercase">Mark Shuttleworth</h3>
      </div>
      <p v-if="route.path.includes('commander')" class="text-blue">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He
        launched into space for the third time as commander of Crew Dragon Demo-2. </p>
      <p v-if="route.path.includes('engineer')" class="text-blue">
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth
        self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
      <p v-if="route.path.includes('pilot')" class="text-blue">
        Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is
        a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
        station systems flight engineer. </p>
      <p v-if="route.path.includes('specialist')" class="text-blue">
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the
        company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel
        to space as a space tourist. </p>
      <nav class="flex flex-row gap-[24px] mt-auto mb-24">
        <NuxtLink to="/crew/commander" class="rounded-full">
          <div class="w-[15px] h-[15px] rounded-full bg-white"
            :class="{ 'opacity-20': !route.path.includes('commander'), 'opacity-100': route.path.includes('commander') }" />
        </NuxtLink>
        <NuxtLink to="/crew/specialist" class="rounded-full">
          <div class="w-[15px] h-[15px] rounded-full bg-white"
            :class="{ 'opacity-20': !route.path.includes('specialist'), 'opacity-100': route.path.includes('specialist') }" />
        </NuxtLink>
        <NuxtLink to="/crew/pilot" class="rounded-full">
          <div class="w-[15px] h-[15px] rounded-full bg-white"
            :class="{ 'opacity-20': !route.path.includes('pilot'), 'opacity-100': route.path.includes('pilot') }" />
        </NuxtLink>
        <NuxtLink to="/crew/engineer" class="rounded-full">
          <div class="w-[15px] h-[15px] rounded-full bg-white"
            :class="{ 'opacity-20': !route.path.includes('engineer'), 'opacity-100': route.path.includes('engineer') }" />
        </NuxtLink>
      </nav>
    </div>
    <img v-if="route.path.includes('commander')" src="/assets/images/crew/image-douglas-hurley.webp"
      alt="Commander Douglas Hurley" class="absolute bottom-0 right-48" />
    <img v-if="route.path.includes('engineer')" src="/assets/images/crew/image-anousheh-ansari.webp"
      alt="Flight Engineer Anousheh Ansari" class="absolute bottom-0 right-48" />
    <img v-if="route.path.includes('pilot')" src="/assets/images/crew/image-victor-glover.webp"
      alt="Pilot Victor Glover" class="absolute bottom-0 right-48" />
    <img v-if="route.path.includes('specialist')" src="/assets/images/crew/image-mark-shuttleworth.webp"
      alt="Mission Specialist Mark Shuttleworth" class="absolute bottom-0 right-48" />
  </div>
</template>