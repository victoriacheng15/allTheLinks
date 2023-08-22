<script setup lang="ts">
import { NAME, HEADLINE } from "../constant/";
import Socials from "./Socials.vue";
</script>

<template>
  <header class="w-11/12 mx-auto max-w-3xl pt-20">
    <div class="flex flex-col gap-8">
      <img
        class="h-40 w-40 mx-auto rounded-full"
        src="/avatar.jpg"
        alt="Victoria Cheng"
      />
      <h1 class="text-center text-3xl font-bold tracking-wide">{{ NAME }}</h1>
      <p class="text-center text-xl tracking-wide">{{ HEADLINE }}</p>
      <Socials />
    </div>
  </header>
</template>
