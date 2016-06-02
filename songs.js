var songs = [
	{
		name: 'Give it to me baby',
		artist: 'Rick James',
		album: 'Funk Forever',
		genre: 'Funk'
	},
	{
		name: 'Nevermind',
		artist: 'Nirvana',
		album: 'Bleach',
		genre: 'Grunge'
	},
	{
		name: 'Buena',
		artist: 'Morphine',
		album: 'Morphine',
		genre: 'Alt-Rock'
	},
	{
		name: 'Let\'s stay together',
		artist: 'Al Green',
		album: 'Yesteryear',
		genre: 'Panty-Dropping'
	},
	{
		name: 'Made up Song title here',
		artist: 'Me First and the Gimmie Gimmies',
		album: 'Nonya',
		genre: 'Rock'
	},

];

songs.forEach(function (songsObj) {
	let outputArticle = document.getElementById('mainBody');

	outputArticle.innerHTML += ` 
						<section class="songSection">
							<p class="strong">${songsObj.name}</p>
							<p>${songsObj.artist}</p>
								<p><strong>|</strong></p>
							<p>${songsObj.album}</p>
								<p><strong>|</strong></p>
							<p>${songsObj.genre}</p>
						</section>`;

});














