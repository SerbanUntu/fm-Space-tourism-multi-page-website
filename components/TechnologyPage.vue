<script setup>
const route = useRoute()
</script>

<template>
  <article class="w-full h-full px-[10vw] py-[5vw] flex flex-col gap-48">
    <h5 class="uppercase flex flex-row"><strong class="w-[54px] opacity-25">03</strong>Space launch 101</h5>
    <section class="flex flex-row gap-[80px] w-full">
      <nav class="flex flex-col w-fit gap-[32px]">
        <NuxtLink v-for="(link, index) in ['/technology/vehicle', '/technology/spaceport', '/technology/capsule']" :to="link" :key="index" class="rounded-full">
          <button class="w-[40px] h-[40px] md:w-[60px] md:h-[60px] xl:w-[80px] xl:h-[80px] flex items-center justify-center rounded-full border-[1px] border-white"
            :class="{ 'border-opacity-25 hover:border-opacity-100': !route.path.includes(link.split('/')[2]), 'text-black bg-white': route.path.includes(link.split('/')[2]) }">
            <h4>{{ index }}</h4>
          </button>
        </NuxtLink>
      </nav>
      <article class="flex flex-col w-[25rem] gap-4">
        <section class="flex flex-col gap-2">
          <p class="uppercase font-barlow-condensed text-[16px] text-blue tracking-[2.7px]">
            The terminology...
          </p>
          <h3 v-if="route.path.includes('capsule')" class="uppercase whitespace-nowrap">
            Space capsule
          </h3>
          <h3 v-if="route.path.includes('spaceport')" class="uppercase whitespace-nowrap">
            Spaceport
          </h3>
          <h3 v-if="route.path.includes('vehicle')" class="uppercase whitespace-nowrap">
            Launch vehicle
          </h3>
        </section>
        <p v-if="route.path.includes('capsule')" class="text-blue">
          A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's
          atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space
          gym, cinema, and plenty of other activities to keep you entertained.
        </p>
        <p v-if="route.path.includes('spaceport')" class="text-blue">
          A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships
          or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage
          of the Earth’s rotation for launch.
        </p>
        <p v-if="route.path.includes('vehicle')" class="text-blue">A launch vehicle or carrier rocket is a
          rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or
          beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an
          awe-inspiring sight on the launch pad!
        </p>
      </article>
      <img v-if="route.path.includes('capsule')" class="w-[515px] h-[527px] ml-auto relative bottom-20 hidden xl:block" src="/assets/images/technology/image-space-capsule-portrait.jpg" alt="Space capsule" />
      <img v-if="route.path.includes('capsule')" class="w-full h-[170px] md:h-[370px] ml-auto relative bottom-20 block xl:hidden" src="/assets/images/technology/image-space-capsule-landscape.jpg" alt="Space capsule" />
      <img v-if="route.path.includes('spaceport')" class="w-[515px] h-[527px] ml-auto relative bottom-20 hidden xl:block" src="/assets/images/technology/image-spaceport-portrait.jpg" alt="Spaceport" />
      <img v-if="route.path.includes('spaceport')" class="w-full h-[170px] md:h-[370px] ml-auto relative bottom-20 block xl:hidden" src="/assets/images/technology/image-spaceport-landscape.jpg" alt="Space capsule" />
      <img v-if="route.path.includes('vehicle')" class="w-[515px] h-[527px] ml-auto relative bottom-20 hidden xl:block" src="/assets/images/technology/image-launch-vehicle-portrait.jpg" alt="Carrier rocket" />
      <img v-if="route.path.includes('vehicle')" class="w-full h-[170px] md:h-[370px] ml-auto relative bottom-20 block xl:hidden" src="/assets/images/technology/image-launch-vehicle-landscape.jpg" alt="Space capsule" />
    </section>
  </article>
</template>