const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the API endpoint URL with the provided movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error); // Print the error if one occurred
  } else {
    // Parse the JSON response body
    const movieData = JSON.parse(body);
    
    // Check if the movie data is valid
    if (movieData.title) {
      console.log(movieData.title); // Print the movie title
    } else {
      console.log('Movie not found.'); // Print a message if the movie data is not found
    }
  }
});
