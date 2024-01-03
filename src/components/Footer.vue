<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <footer class="mt-auto py-4">
    <p class="text-center">
      Copyright &copy; <span aria-label="penguin emoji">🐧</span> {{ name }} | <span><a
          href="https://github.com/victoriacheng15/allTheLinks" target="_blank" rel="noopener noreferrer">👋<img
            class="h-4 w-4 inline ml-2" src="./socials/github.svg" alt="github" /></a></span>
    </p>
  </footer>
</template>
