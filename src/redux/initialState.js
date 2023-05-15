const initialState = {
	posts: [
		{
		id: '1',
		title: 'Article#1',
		shortDescription: 'Short description of article#1...',
		content: 'Main content of article#1...',
		publishedDate: new Date('02/03/2023'),
		author: 'John Doe',
		category: 'News'
		},
		{
		id: '2',
		title: 'Article#2',
		shortDescription: 'Short description of article#2...',
		content: 'Main content of article#2...',
		publishedDate: new Date('02/07/2023'),
		author: 'Amanda Doe',
		category: 'Games'
		},
		{
		id: '3',
		title: 'Article#3',
		shortDescription: 'Short description of article#3...',
		content: 'Main content of article#3...',
		publishedDate: new Date('03/02/2023'),
		author: 'John Doe',
		category: 'Movies'
		},
		{
		id: '4',
		title: 'Article#4',
		shortDescription: 'Short description of article#4...',
		content: 'Main content of article#4...',
		publishedDate: new Date('03/12/2023'),
		author: 'John Doe',
		category: 'News'
		}
	],
	categories: [
		'Games',
		'Movies',
		'News'
	]
};

export default initialState;