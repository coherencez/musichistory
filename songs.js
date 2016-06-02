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



function hideListView () {
	let listViewClasses = document.getElementsByClassName('listview');
	let addSongView = document.getElementById('addView');
		for (let i = 0; i < listViewClasses.length; i++) {
		listViewClasses[i].classList.add('hidden');
	 }
		addSongView.classList.remove('hidden');
}

function hideAddSongView () {
	let listViewClasses = document.getElementsByClassName('listview');
	let addSongView = document.getElementById('addView');
		for (let i = 0; i < listViewClasses.length; i++) {
		listViewClasses[i].classList.remove('hidden');
	 }
		addSongView.classList.add('hidden');
}

function buildSongObj (newSong, newArtist, newAlbum, newGenre) {

	let outputArticle = document.getElementById('mainBody');

	let newObj = {
								name: newSong,
								artist: newArtist,
								album: newAlbum,
								genre: newGenre
							};

	songs.push(newObj);	
	console.log(songs);

	outputArticle.innerHTML += ` 
						<section class="songSection">
							<p class="strong">${newObj.name}</p>
							<p>${newObj.artist}</p>
								<p><strong>|</strong></p>
							<p>${newObj.album}</p>
								<p><strong>|</strong></p>
							<p>${newObj.genre}</p>
						</section>`;
}

function validateFields () {

	let songName = document.getElementById('input-1'),
	    artist = document.getElementById('input-2'),
	    album = document.getElementById('input-3'),
	    genre = document.getElementById('input-4');

	let newSong = songName.value, newArtist = artist.value, newAlbum = album.value, newGenre = genre.value;

			buildSongObj(newSong, newArtist, newAlbum, newGenre);

			songName.value = '';
			artist.value = '';
			album.value = '';
			genre.value = '';
			
}




let addSong = document.getElementById('addSongsButton');
addSong.addEventListener('click', validateFields);

let addLink = document.getElementById('addMusicLink');
addLink.addEventListener('click', hideListView);

let listLink = document.getElementById('listViewLink');
listLink.addEventListener('click', hideAddSongView);





