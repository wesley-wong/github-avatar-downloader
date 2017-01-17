const input = process.argv.slice(2);
var repoOwner = input[0];
var repoName = input[1];

const fs = require("fs");
const request = require('request');

const folderPath = "avatars/";

// Make new Folder 'avatar' and handles error if it exists
var mkdirSync = function () {
  try {
    fs.mkdirSync("avatars");
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}();

const GITHUB_USER = "trrippy";
const GITHUB_TOKEN = "767510ebf3298c6299bbaa47e1661f34891a82b2";


function getRepoContributors(repoOwner, repoName, cb) {

  var requestOptions = {
    url : 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      "User-Agent" : "GitHub Avatar Downloader - Student Project"
    }
  }
  var output = '';
  // Request for information from github
  request.get(requestOptions, cb)

}

getRepoContributors(repoOwner, repoName, function(err, result) {
  console.log("Errors:", err);
  var resultObj = JSON.parse(result.body);
  // resultObj.forEach((item) => console.log(item.login));
  resultObj.forEach((item) => downloadImageByUrl(item.avatar_url, folderPath + item.login + '.jpg'));
});



function downloadImageByUrl(url, filePath){
  console.log(url);
  console.log(filePath);
  request.get(url)               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw console.log('Well, that didnt\' work', err);
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream(filePath));

  /*
  fs.createWriteStream(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }
  console.log("Successfully wrote to", filePath);

});
*/
}