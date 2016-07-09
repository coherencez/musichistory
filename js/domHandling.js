'use strict';
const loadSongs = require('./loadSongs');
const addSongs = require('./addSongs');


function showAddView () {
	$('.listview').hide();
	$('#addView').show();
}

function showListView () {
	$('.listview').show();
	$('#addView').hide();
}

$('#addMusicLink').on('click', showAddView);
$('#listViewLink').on('click', showListView);
$('#addSongsButton').on('click', addSongs.validateFields);

$('#profileLink').on('click', () => {
	console.log(loadSongs.getSongs());
});







