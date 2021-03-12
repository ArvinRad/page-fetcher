const address = process.argv;
const request = require('request');
const fs = require('fs');
let url = address[2];
const myData = request(`${url}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log(body);
});
fs.writeFile(`${address[3]}`, myData, function (err) {
    if (err) return console.log(err);
    console.log(`Downloaded and saved 3261 bytes to ${address[3]}.`);
  }); // Print the HTML to the index.html.