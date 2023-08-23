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
		title: "Software Engineering at Google",
		author: "Titus Winters",
	},
];

export const PLACEHOLDERS = [...new Array(BOOKS.length).fill(0)].map(
	(_, index) => index + 1,
);
