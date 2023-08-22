<script setup lang="ts">
import { SCOIALS } from "../constant";
import { formatNameForSVG } from "../utils";
</script>

<template>
  <ul class="flex justify-center items-center gap-6">
    <li
      v-for="{ title, href } in SCOIALS"
      :key="title"
      class="p-1 rounded-lg overflow-hidden duration-300 ease-in-out relative before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-t from-blue-400 to-blue-600 before:w-full before:hover:from-blue-600 before:hover:to-blue-400 before:duration-300 before:ease-in-out"
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
