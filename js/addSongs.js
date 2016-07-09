'use strict';
const loadSongs = require('./loadSongs');

function addToSongList (songObj) {
	$('#mainBody').append( ` 
						<section class="songSection">
							<p class="strong">${songObj.name}</p>
							<p>${songObj.artist}</p>
								<p><strong>|</strong></p>
							<p>${songObj.album}</p>
								<p><strong>|</strong></p>
							<p>${songObj.genre}</p>
						</section>`);
}

function buildSongObj (newSong, newArtist, newAlbum, newGenre) {
	// format user song into POJO for use in DOM
	let newObj = {name: newSong, artist: newArtist, album: newAlbum, genre: newGenre};
	// add new song obj to private array of existing songs
	loadSongs.addSong(newObj);
	// populate DOM list with new song
	addToSongList(newObj);
}

function validateFields () {
	let newSong = $('#input-1').val(), newArtist = $('#input-2').val(), newAlbum = $('#input-3').val(), newGenre = $('#input-4').val();

			buildSongObj(newSong, newArtist, newAlbum, newGenre);

			songName.val('');
			artist.val('');
			album.val('');
			genre.val('');
}

module.exports = {validateFields};