require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2]
var command3 = process.argv[3]

switch (command) {
    case "concert-this":
        concert();
        break;

    case "spotify-this-song":
        spotifythis();
        break;
        
    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        dowhatitsays();
        break;    
}


//concert this add searchs render events
function concert() {
   var queryUrl = "https://rest.bandsintown.com/artists/" + command3 + "/events?app_id=codingbootcamp"

   axios.get(gueryUrl).then(
       function(response) {
        console.log(response);
       })
       .catch(function(error) {
        console.log(error);
       })
       
}

function spotify()

// spotify
//   .search({ type: 'artist OR album OR track', query: 'All the Small Things' })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

