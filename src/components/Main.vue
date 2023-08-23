<script setup lang="ts">
import { LINKS } from "../constant";
import Books from "./Books.vue";
</script>

<template>
  <main class="mx-auto w-11/12 max-w-3xl py-14 space-y-10">
    <section>
      <ul class="flex flex-col gap-8 text-center">
        <li v-for="{ title, href } in LINKS" :key="title" class="overflow-hidden rounded-lg">
          <a :href="href" target="_blank" rel="noopener noreferrer" class="text-2xl">
            <div
              class="group relative h-full w-full bg-blue-800 p-3 before:absolute before:inset-0 before:w-0 before:bg-blue-300 before:duration-300 before:ease-in-out before:hover:w-full">
              <span class="relative z-20 font-medium tracking-wider group-hover:text-gray-900">{{ title }}</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <section>
      <Books />
    </section>
  </main>
</template>
