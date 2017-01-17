const input = process.argv.slice(2);
var repoOwner = input[0];
var repoName = input[1];

const fs = require("fs");
const request = require('request');


require('dotenv').config()

const GITHUB_USER = process.env.DB_USER;
const GITHUB_TOKEN = process.env.DB_PASS;

const folderPath = "avatars/";

// Make new Folder 'avatar' and handles error if it exists
var mkdirSync = function () {
  try {
    fs.mkdirSync("avatars");
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}();


function getRepoContributors(repoOwner, repoName, cb) {

  var requestOptions = {
    url : 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      "User-Agent" : "GitHub Avatar Downloader - Student Project"
    }
  }
  // Request for information from github
  request.get(requestOptions, cb)

}


function downloadImageByUrl(url, filePath){
  request.get(url)
       .on('error', function (err) {
         throw console.log('Well, that didnt\' work', err);
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream(filePath));

}

getRepoContributors(repoOwner, repoName, function(err, result) {
  console.log("Errors:", err);
  var resultObj = JSON.parse(result.body);
  resultObj.forEach((item) => downloadImageByUrl(item.avatar_url, folderPath + item.login + '.jpg'));
});