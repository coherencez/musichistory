'use strict';
const loadSongs = require('./loadSongs');
const addSongs = require('./addSongs');


function showAddView () {
	$('.listview').toggleClass('hidden');
	$('#moreSongs').toggleClass('hidden');
	$('#addView').toggleClass('hidden');
}

function showListView () {
	$('.listview').toggleClass('hidden');
	$('#moreSongs').toggleClass('hidden');
	$('#addView').toggleClass('hidden');
}

$('#addMusicLink').on('click', showAddView);
$('#listViewLink').on('click', showListView);
$('#addSongsButton').on('click', addSongs.validateFields);

$('#profileLink').on('click', () => {
	console.log(loadSongs.getSongs());
});



