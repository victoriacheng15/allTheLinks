<script setup lang="ts">
import { ref, onMounted } from "vue";
import { BOOKS } from "../constant";
import { formatAuthors } from "../utils"

const books = ref<Book[]>([])
const loading = ref(false)
const errorMsg = ref<string>("")

async function getBooksInfo(bookTitle: string, author: string) {
  const PARMS = '&printType=books&projection=lite';
  const URL = `https://www.googleapis.com/books/v1/volumes?q=+intitle:${bookTitle}+inauthor:${author}
  ${PARMS}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    const myBooks = data.items.find(
      ({ volumeInfo: { title } }: VolumeInfo) => title === bookTitle
    );
    console.log(myBooks)
    return myBooks.volumeInfo;
  } catch (err) {
    throw err;
  }
}

onMounted(async () => {
  loading.value = true;
  try {
    const fetchBooks = BOOKS.map((book) =>
      getBooksInfo(book.title, book.author)
    );
    const bookInfos = await Promise.all(fetchBooks);
    books.value = bookInfos;
  } catch (err) {
    errorMsg.value = err as string;
    console.error('Failed to fetch book information:', errorMsg.value);
  } finally {
    loading.value = false;
  }
});

</script>

<template>
  <h2 class="py-6 text-center text-3xl">
    📚 My Book Recommendations: 📚
  </h2>
  <p v-if="loading">it is loading at this moment</p>
  <ul class="flex flex-wrap items-center justify-center gap-6">
    <li v-for="{ title, authors, imageLinks: { thumbnail } } in books" :key="title"
      class="grid place-items-center gap-1 w-56">
      <img class="h-full w-full" :src="thumbnail" :alt="`${title} Book by ${formatAuthors(authors)}`">
      <h3 class="text-center text-xl">
        {{ title }}
      </h3>
    </li>
  </ul>
</template>