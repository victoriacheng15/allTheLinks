<script setup lang="ts">
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { NAME, HEADLINE } from "./constant";
</script>

<template>
  <Header :name="NAME" :headline="HEADLINE" />
  <Main />
  <Footer :name="NAME" />
</template>
