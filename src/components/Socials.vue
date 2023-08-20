<script setup lang="ts">
import { SCOIALS } from "../constant/"
import { formatName } from "../utils"
</script>

<template>
  <ul class="flex justify-center items-center gap-6">
    <li v-for="social in SCOIALS" :key="social.title"
      class="p-1 rounded-lg bg-blue-400 duration-300 ease-in-out hover:scale-125">
      <a :href="social.href" target="_blank" rel="noopener noreferrer">
        <img :src="`./socials/${formatName(social.title)}.svg`" :alt="social.title" width="48" height="48" />
      </a>
    </li>
  </ul>
</template>