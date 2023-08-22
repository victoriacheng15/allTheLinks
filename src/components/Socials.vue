<script setup lang="ts">
import { SCOIALS } from "../constant";
import { formatNameForSVG } from "../utils";
</script>

<template>
  <ul class="flex items-center justify-center gap-6">
    <li
      v-for="{ title, href } in SCOIALS"
      :key="title"
      class="relative overflow-hidden rounded-lg from-blue-400 to-blue-600 p-1 duration-300 ease-in-out before:absolute before:inset-0 before:-z-10 before:w-full before:bg-gradient-to-t before:duration-300 before:ease-in-out before:hover:from-blue-600 before:hover:to-blue-400"
    >
      <a :href="href" target="_blank" rel="noopener noreferrer">
        <img
          :src="`./socials/${formatNameForSVG(title)}.svg`"
          :alt="title"
          width="48"
          height="48"
        />
      </a>
    </li>
  </ul>
</template>
