export interface Film {
	id: number;
	img: string;
	rating: number;
	title: string;
}

export const data: Film[] = [
	{ id: 1, img: '/films/film1.jpg', rating: 324, title: 'Black Widow' },
	{ id: 2, img: '/films/film2.jpg', rating: 124, title: 'Shang Chi' },
	{ id: 3, img: '/films/film3.jpg', rating: 235, title: 'Loki' },
	{ id: 4, img: '/films/film4.jpg', rating: 123, title: 'How I Met Your Mother' },
	{ id: 5, img: '/films/film5.jpg', rating: 8125, title: 'Money Heist' },
	{ id: 6, img: '/films/film6.jpg', rating: 124, title: 'Friends' },
	{ id: 7, img: '/films/film7.jpg', rating: 12, title: 'The Big Bang Theory' },
	{ id: 8, img: '/films/film8.jpg', rating: 456, title: 'Two And a Half Men' }
];
