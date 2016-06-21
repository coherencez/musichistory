'use strict';
$(function (){ 
function showAddView () {
	let listViewClasses = $('.listview');
	let addButton = $('#moreSongs');
	let addSongView = $('#addView');
		listViewClasses.toggleClass('hidden');
		addButton.toggleClass('hidden');
		addSongView.toggleClass('hidden');
}

function showListView () {
	let listViewClasses = $('.listview');
	let addButton = $('#moreSongs');
	let addSongView = $('#addView');
		listViewClasses.toggleClass('hidden');
		addButton.toggleClass('hidden');
		addSongView.toggleClass('hidden');
}

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

	let newSong = songName.val(), newArtist = artist.val(), newAlbum = album.val(), newGenre = genre.val();

			buildSongObj(newSong, newArtist, newAlbum, newGenre);

			songName.val('');
			artist.val('');
			album.val('');
			genre.val('');
}

function parseJSON (event) {
  let outputArticle = $('#mainBody'),
  		htmlString = '';
  $(event.songs).each(function (e) {
  	htmlString += `<section class="songSection">
  									<p class="strong">${event.songs[e].name}</p>
  									<p>${event.songs[e].artist}</p>
  									<p><strong>|</strong></p>
  									<p>${event.songs[e].album}</p>
  									<p><strong>|</strong></p>
  									<p>${event.songs[e].genre}</p>
  								</section>`;

  });

  outputArticle.append(htmlString);
} 

function loadMoreSongs (data) {
  let outputArticle = $('#mainBody'),
  		htmlString = '';
	$(data.songs2).each(function (e) {
  	htmlString += `<section class="songSection">
  									<p class="strong">${data.songs2[e].name}</p>
  									<p>${data.songs2[e].artist}</p>
  									<p><strong>|</strong></p>
  									<p>${data.songs2[e].album}</p>
  									<p><strong>|</strong></p>
  									<p>${data.songs2[e].genre}</p>
  								</section>`;

  });

  outputArticle.append(htmlString);
} 

function XHRfail () {
	let outputArticle = $('#mainBody');
	outputArticle.html( `<h3>404 file not found</h3>`);
}

var addSong = $('#addSongsButton');
addSong.on('click', validateFields);

var addLink = $('#addMusicLink');
addLink.on('click', showAddView);

var listLink = $('#listViewLink');
listLink.on('click', showListView);


$.ajax({
	url: 'js/songs.json'
}).done(function (data) {
	parseJSON(data);
});




function buttonClick (event) {
	$.ajax({
		url: 'js/songs2.json'
	}).done(function (e) {
		loadMoreSongs(e);
	});	
}

var addSongsButton = $('#moreSongs');
addSongsButton.on('click', buttonClick);

});






