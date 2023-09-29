const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Character ID for "Wedge Antilles"
const characterId = 18;

// Make a GET request to the Star Wars API films endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error); // Print the error if one occurred
  } else {
    // Parse the JSON response body
    const filmsData = JSON.parse(body);
    
    // Filter films where "Wedge Antilles" is present (character ID 18)
    const moviesWithWedgeAntilles = filmsData.results.filter(film => {
      return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
    });
    
    // Print the number of movies where "Wedge Antilles" is present
    console.log(moviesWithWedgeAntilles.length);
  }
});
