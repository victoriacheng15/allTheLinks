interface List {
	title: string;
	href: string;
	category?: string;
}

interface Book {
	title: string;
	authors: string;
	imageLinks: {
		smallThumbnail: string;
		thumbnail: string;
	};
}

interface FetchBooks {
	books: Book[];
	loading: boolean;
	error: string;
}

interface VolumeInfo {
	volumeInfo: {
		title: string;
	};
}
