<script setup lang="ts">

defineProps<{ message: string }>()

</script>

<template>
  <h1>{{ message }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
