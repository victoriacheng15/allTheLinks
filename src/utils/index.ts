export function formatNameForSVG(title: string) {
	return title.toLowerCase().split(" ").join("");
}

export function formatAuthors(authors: string[]): string {
	const authorCount = authors.length
	const formatOptions = {
		1: `${authors}`,
		2: `${authors.join(" and ")}`,
	}

	const threeAuthorsPlus = `${authors.slice(0, -1).join(", ")}, and ${authors.slice(-1)}`

	return formatOptions[authorCount as keyof typeof formatOptions] || threeAuthorsPlus
}