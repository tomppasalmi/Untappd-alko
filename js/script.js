'use strict';

var id = "UNTAPPD Client ID here";
var secret = "UNTAPPD Secret here";
var token = "UNTAPPD Token here";


// Working in https://www.alko.fi/
function postBeerInfo(rate) {
  $('div.hard-facts').find('ul.flexible-block-grid.small-up-1').first().prepend(
    '<li class="column">' +
    '<div class="small-b1 h8 fact-label">MY UNTAPPD RATE</div>' +
      '<div class="small-h6 h6 fact-data">' + rate + '</div>' +
      '</li>');

}



//Search for the beer on ratebeer(result is webscraped)
function searchBeer(beername) {
  var input = { client_id:id, client_secret:secret, access_token:token, q:beername }
  var firstHit = '';
  var link = '';
  var foundPerfectMatch = false;
  $.ajax({
    type: 'GET',
    contentType: 'application/x-www-form-urlencoded;',
    url: 'https://api.untappd.com/v4/search/beer',
    data: input,
    dataType: 'html',
    success: function(data) {

      var jsonContent = JSON.parse(data);
      var have = jsonContent.response.beers.items[0].have_had;
      var rate = jsonContent.response.beers.items[0].beer.auth_rating;
      console.log(have);
      console.log(rate);
      if (have == true) {
        postBeerInfo(rate);
      } else {
        postBeerInfo("Not rated yet");
      }

    }
  });
}

function removespecials(beer)
{
  var strippedBeer = beer.replace(/å/g, "a").replace(/ä/g, 'a').replace(/ö/g, 'o')
                         .replace(/Å/g, 'A').replace(/Ä/g, 'A').replace(/Ö/g, 'O')
                         .replace(/Ø/g, 'O').replace(/æ/g, 'a').replace(/&/g, '').replace(/-/g, '');
  return strippedBeer;
}


var systemBeer  = $('h1.product-name').text();
var systemSubTitle = $('span.underlined-heading').text();

var beer = $.trim(systemBeer) + " " + $.trim(systemSubTitle);
console.log("found: " + systemBeer);
console.log("found: " + systemSubTitle);
console.log("found: " + beer);


//Start search
searchBeer(removespecials(systemBeer));

