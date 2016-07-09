'use strict';
const loadSongs = require('./loadSongs');

function buildSongObj (newSong, newArtist, newAlbum, newGenre) {

	let outputArticle = $('#mainBody');
	let newObj = {
								name: newSong,
								artist: newArtist,
								album: newAlbum,
								genre: newGenre
							};

	outputArticle.append( ` 
						<section class="songSection">
							<p class="strong">${newObj.name}</p>
							<p>${newObj.artist}</p>
								<p><strong>|</strong></p>
							<p>${newObj.album}</p>
								<p><strong>|</strong></p>
							<p>${newObj.genre}</p>
						</section>`);
}

function validateFields () {

	let songName = $('#input-1'),
	    artist = $('#input-2'),
	    album = $('#input-3'),
	    genre = $('#input-4');

	let newSong = songName.val(), 
			newArtist = artist.val(), 
			newAlbum = album.val(), 
			newGenre = genre.val();

			buildSongObj(newSong, newArtist, newAlbum, newGenre);

			songName.val('');
			artist.val('');
			album.val('');
			genre.val('');
}

$('#addSongsButton').on('click', validateFields);