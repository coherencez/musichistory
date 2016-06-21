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

function parseJSON () {
  // console.log(this.responseText);
  // console.log(event);
  let outputArticle = $('#mainBody');
	// let response = this;
	// for (var obj in response) {
	// 	// console.log(response[obj][0].name)
	// 	for (var i = 0; i < response[obj].length; i++) {
	// 		// console.log(response[obj][i].name);

	// 		outputArticle.innerHTML += ` 
	// 					<section class="songSection">
	// 						<p class="strong">${response[obj][i].name}</p>
	// 						<p>${response[obj][i].artist}</p>
	// 							<p><strong>|</strong></p>
	// 						<p>${response[obj][i].album}</p>
	// 							<p><strong>|</strong></p>
	// 						<p>${response[obj][i].genre}</p>
	// 					</section>`;
	// 	}
	// }
} 

function loadMoreSongs () {
  let outputArticle = document.getElementById('mainBody');
	let response = JSON.parse(this.responseText);

	for (var obj in response) {
		for (var i = 0; i < response[obj].length; i++) {

			outputArticle.innerHTML += ` 
						<section class="songSection">
							<p class="strong">${response[obj][i].name}</p>
							<p>${response[obj][i].artist}</p>
								<p><strong>|</strong></p>
							<p>${response[obj][i].album}</p>
								<p><strong>|</strong></p>
							<p>${response[obj][i].genre}</p>
						</section>`;
		}
	}
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



// // XHR objects emit events when their operation is complete, or an error occurs
// myRequest.addEventListener('load', parseJSON);
// myRequest.addEventListener('error', XHRfail);

$.ajax({
	url: 'songs.js'
})
.done(function () {
	parseJSON();
});




function buttonClick (event) {
    console.log(event);
	let secondRequest = new XMLHttpRequest();

  secondRequest.addEventListener('load', loadMoreSongs);
  secondRequest.addEventListener('error', XHRfail);
  secondRequest.open('GET', 'songs2.json');
  secondRequest.send();

}

var addSongsButton = document.getElementById('moreSongs');
addSongsButton.addEventListener('click', buttonClick);

console.log(addSongsButton);

});






