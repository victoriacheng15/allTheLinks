<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <footer class="mt-auto py-4">
    <p class="text-center">
      Copyright &copy; <span aria-label="penguin emoji">🐧</span> {{ name }}
    </p>
  </footer>
</template>
