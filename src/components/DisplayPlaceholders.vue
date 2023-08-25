<script setup lang="ts">
import { PLACEHOLDERS } from "../constant";

defineProps<{ isLoading: boolean }>();
</script>

<template>
  <ul v-if="isLoading" class="flex flex-wrap items-center justify-center gap-6">
    <li v-for=" placeholder in PLACEHOLDERS" :key="placeholder" class="w-56">
      <div class="h-72 w-full bg-gray-50 opacity-25 blur-sm" />
      <div class="h-7 w-full bg-gray-50 opacity-30 blur-sm" />
    </li>
  </ul>
</template>
