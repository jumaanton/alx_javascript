const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

// Make a GET request
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error); // Print the error if one occurred
  } else {
    console.log('code:', response.statusCode); // Print the status code
  }
});
