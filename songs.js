function showAddView () {
	let listViewClasses = document.getElementsByClassName('listview');
	let addButton = document.getElementById('moreSongs');
	let addSongView = document.getElementById('addView');
		for (let i = 0; i < listViewClasses.length; i++) {
		listViewClasses[i].classList.add('hidden');
		addButton.classList.add('hidden');
	 }
		addSongView.classList.remove('hidden');
}

function showListView () {
	let listViewClasses = document.getElementsByClassName('listview');
	let addButton = document.getElementById('moreSongs');
	let addSongView = document.getElementById('addView');
		for (let i = 0; i < listViewClasses.length; i++) {
		listViewClasses[i].classList.remove('hidden');
		addButton.classList.remove('hidden');
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

function parseJSON (event) {
  // console.log(this.responseText);
  // console.log(event);
  let outputArticle = document.getElementById('mainBody');
	let response = JSON.parse(event.target.responseText);
	// console.log("parsed json", response);

	for (var obj in response) {
		// console.log(response[obj][0].name)
		for (var i = 0; i < response[obj].length; i++) {
			// console.log(response[obj][i].name);
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

function loadMoreSongs () {
  // console.log(this.responseText);
  // console.log(event);
  let outputArticle = document.getElementById('mainBody');
	let response = JSON.parse(this.responseText);
	// console.log("parsed json", response);

	for (var obj in response) {
		// console.log(response[obj][0].name)
		for (var i = 0; i < response[obj].length; i++) {
			// console.log(response[obj][i].name);
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
	let outputArticle = document.getElementById('mainBody');
	outputArticle.innerHTML += `<h3>404 file not found</h3>`;
}

// function appendDeleteButton () {
// 	let songDiv = document.getElementsByClassName('songSection');
// 	console.log(songDiv);
// 	for (var i = 0; i < songDiv.length; i++) {
// 	}
// }

// appendDeleteButton();

var addSong = document.getElementById('addSongsButton');
addSong.addEventListener('click', validateFields);

var addLink = document.getElementById('addMusicLink');
addLink.addEventListener('click', showAddView);

var listLink = document.getElementById('listViewLink');
listLink.addEventListener('click', showListView);









// Create an XHR object
var myRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener('load', parseJSON);
myRequest.addEventListener('error', XHRfail);

// Then tell the XHR object exactly what to do
myRequest.open('GET', 'songs.json');

// Tell the XHR object to start
myRequest.send();


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








