'use strict';
const populateList = require('./populateList');
const songs = [];

fetch('js/songs.json')
	.then(response => response.json())
	.then(parsedResponse => {parsedResponse.songs.forEach(addSong); populateList(songs);})
	.catch(err => console.warn("Load json failed:", err));

const getSongs = () => {
	return songs;
}

const addSong = (newSong) => {
	songs.push(newSong);
}

module.exports = {getSongs,addSong};

