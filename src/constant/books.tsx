export const BOOKS = [
  {
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
  },
  {
    title: "Building a Second Brain",
    author: "Tiago Forte",
  },
  {
    title: "Limitless",
    author: "Jim Kwik",
  },
  {
    title: "The 12 Week Year",
    author: "Brian P. Moran",
  },
];

export const PLACEHOLDERS = [...new Array(BOOKS.length).fill(0)].map(
  (_, index) => index + 1,
);
