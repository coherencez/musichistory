'use strict';
function populateList (songs) {
  let	songListString = '',
      artistChoiceString = '',
      albumChoiceString = '';

  songs.forEach((v,i) => {
	   songListString += `<section class="songSection">
  	   							   	<p class="strong">${songs[i].name}</p>
  	   							   	<p>${songs[i].artist}</p>
  	   							   	<p><strong>|</strong></p>
  	   							   	<p>${songs[i].album}</p>
  	   							   	<p><strong>|</strong></p>
  	   							   	<p>${songs[i].genre}</p>
	 		  					   </section>`;
    artistChoiceString += `<option value="${songs[i].artist}" id="artistOpt-${i}">${songs[i].artist}</option>`; 
    albumChoiceString += `<option value="${songs[i].album}" id="albumOpt-${i}">${songs[i].album}</option>`; 
  });
  $('#mainBody').append(songListString);
  $('#artistSelect').append(artistChoiceString);
  $('#albumSelect').append(albumChoiceString);
} 



module.exports = populateList;