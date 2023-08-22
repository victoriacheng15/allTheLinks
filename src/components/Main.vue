<script setup lang="ts">
import { LINKS } from "../constant";
</script>

<template>
  <main class="w-11/12 mx-auto max-w-3xl py-14">
    <section>
      <ul class="flex flex-col gap-8 text-center">
        <li
          v-for="{ title, href } in LINKS"
          :key="title"
          class="overflow-hidden rounded-lg"
        >
          <a
            :href="href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-2xl"
          >
            <div
              class="group w-full h-full p-3 bg-blue-800 relative before:absolute before:inset-0 before:w-0 before:hover:w-full before:duration-300 before:ease-in-out before:bg-blue-300"
            >
              <span
                class="relative z-20 font-medium tracking-wider group-hover:text-gray-900"
                >{{ title }}</span
              >
            </div>
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>
