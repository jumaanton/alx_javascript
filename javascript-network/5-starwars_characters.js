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
    
    // Print the characters' names
    movieData.characters.forEach(characterUrl => {
      request.get(characterUrl, (error, response, body) => {
        if (error) {
          console.error('Error:', error); // Print the error if one occurred
        } else {
          const characterData = JSON.parse(body);
          console.log(characterData.name); // Print the character's name
        }
      });
    });
  }
});
