<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getBooksInfo } from "../composables/useFetchBooks.vue";
import Placeholders from "./DisplayPlaceholders.vue";
import { BOOKS } from "../constant";
import { formatAuthors } from "../utils";

const books = ref<Book[]>([]);
const loading = ref(false);
const errorMsg = ref<string>("");

onMounted(async () => {
  loading.value = true;
  try {
    const fetchBooks = BOOKS.map(({ title, author }) =>
      getBooksInfo(title, author)
    );
    const bookInfos = await Promise.all(fetchBooks);
    books.value = bookInfos;
  } catch (err) {
    errorMsg.value = err as string;
    console.error("Failed to fetch book information:", errorMsg.value);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <h2 class="py-6 text-center text-3xl">📚 My Book Recommendations: 📚</h2>
  <Placeholders :isLoading="loading" />
  <ul class="flex flex-wrap items-center justify-center gap-6">
    <li
      v-for="{ title, authors, imageLinks: { thumbnail } } in books"
      :key="title"
      class="grid w-56 place-items-center gap-1"
    >
      <img
        class="h-full w-full"
        :src="thumbnail"
        :alt="`${title} Book by ${formatAuthors(authors)}`"
      />
      <h3 class="text-center text-xl">
        {{ title }}
      </h3>
    </li>
  </ul>
</template>
