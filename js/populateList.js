'use strict';
function populateList (songs) {
  let	htmlString = '';
  $(songs).each((i) => {
  	htmlString += `<section class="songSection">
  									<p class="strong">${songs[i].name}</p>
  									<p>${songs[i].artist}</p>
  									<p><strong>|</strong></p>
  									<p>${songs[i].album}</p>
  									<p><strong>|</strong></p>
  									<p>${songs[i].genre}</p>
  								</section>`;
  });
  $('#mainBody').append(htmlString);
} 

module.exports = populateList;