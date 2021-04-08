const address = process.argv;
const request = require('request');
const fs = require('fs');
let url = address[2];
request(`${url}`, (err, response, body) => {
  if(err) {
    console.log('error:', err); // Print the error if one occurred
  } else {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    fs.writeFile(`${address[3]}`, body, function (err) {
      if (err) {
        return console.log(err);
      } else {
        console.log(`Downloaded and saved 3261 bytes to ${address[3]}.`);
      }
    });
  }
  });
