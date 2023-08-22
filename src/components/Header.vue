<script setup lang="ts">
import Socials from "./Socials.vue";

defineProps<{ name: string; headline: string }>();
</script>

<template>
  <header class="mx-auto w-11/12 max-w-3xl pt-20">
    <div class="flex flex-col gap-8">
      <img
        class="mx-auto h-40 w-40 rounded-full"
        src="/avatar.jpg"
        alt="{{ name }}"
      />
      <h1 class="text-center text-3xl font-bold tracking-wide">{{ name }}</h1>
      <p class="text-center text-xl tracking-wide">{{ headline }}</p>
      <Socials />
    </div>
  </header>
</template>
