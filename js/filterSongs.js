'use strict';
const loadSongs = require('./loadSongs');
const populateList = require('./populateList');


$('#filterButton').on('click', () => {
	let artistChoice = $('#artistSelect').val(),
			albumChoice = $('#albumSelect').val(),
			songData = loadSongs.getSongs(),
			filteredSongs = songData.filter((songs) => {return songs.artist === artistChoice}); 

			$('#mainBody').empty();
			populateList(filteredSongs);
			console.log("filtered", filteredSongs);
	
});