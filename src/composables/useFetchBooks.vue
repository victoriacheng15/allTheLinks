<script lang="ts">
export async function getBooksInfo(bookTitle: string, author: string) {
  const PARMS = "&printType=books&projection=lite";
  const URL = `https://www.googleapis.com/books/v1/volumes?q=+intitle:${bookTitle}+inauthor:${author}
  ${PARMS}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    const myBooks = data.items.find(
      ({ volumeInfo: { title } }: VolumeInfo) => title === bookTitle
    );
    console.log(myBooks);
    return myBooks.volumeInfo;
  } catch (err) {
    throw err;
  }
}
</script>
