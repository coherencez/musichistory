'use strict';
const loadSongs = require('./loadSongs');


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
$('#listViewLink').on('click', () => showListView);

$('#profileLink').on('click', () => {
	console.log(loadSongs.getSongs());
});



