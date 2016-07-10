'use strict';
const loadSongs = require('./loadSongs');

function addToSongList (songObj) {
var data = loadSongs.getSongs(),
		counter = data.length - 1;

	$('#mainBody').append( ` 
						<section class="songSection">
							<p class="strong">${songObj.name}</p>
							<p>${songObj.artist}</p>
								<p><strong>|</strong></p>
							<p>${songObj.album}</p>
								<p><strong>|</strong></p>
							<p>${songObj.genre}</p>
						</section>`);
	$('#artistSelect').append(`<option value="${songObj.artist}" id="artistOpt-${counter}">${songObj.artist}</option>`);
  $('#albumSelect').append(`<option value="${songObj.album}" id="albumOpt-${counter}">${songObj.album}</option>`);
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

			$('#input-1').val('');
			$('#input-2').val('');
			$('#input-3').val('');
			$('#input-4').val('');
}

module.exports = {validateFields};