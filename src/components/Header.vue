<script setup lang="ts">
import { NAME, HEADLINE } from "../constant/"
</script>

<template>
  <header class="w-11/12 mx-auto max-w-3xl">
    <div class="flex flex-col gap-6">
      <img class="h-40 w-40 mx-auto rounded-full" src="/avatar.jpg" alt="" />
      <h1 class="text-center text-3xl font-bold tracking-wide">{{ NAME }}</h1>
      <p class="text-center text-xl font-medium tracking-wide">{{ HEADLINE }}</p>
    </div>
  </header>
</template>