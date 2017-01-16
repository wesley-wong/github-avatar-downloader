const input = process.argv.slice(1);

const fs = require("fs");
const request = require('request');

const folderPath = "/avatars/";

// Make new Folder 'avatar' and handles error if it exists
var mkdirSync = function () {
  try {
    fs.mkdirSync("avatar");
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}();

const GITHUB_USER = "trrippy";
const GITHUB_TOKEN = "767510ebf3298c6299bbaa47e1661f34891a82b2";
repoOwner = 'jquery';
repoName = 'jquery';
function getRepoContributors(repoOwner, repoName, cb) {
  // ...


  var requestOptions = {
    url : 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      "User-Agent" : "GitHub Avatar Downloader - Student Project"
    }
  }
  var output = '';
  // Request for information from github
  request.get(requestOptions, cb)               // Note 1
          /*
         .on('error', function (err) {                                   // Note 2
           throw console.log('Well, that didnt\' work', err);
         })
         .on('response', function (response) {                           // Note 3
           console.log('Response Status Code: ', response.statusCode);
         })
         WHY YOU NO WORRrrrRRRRRRKKkKKK
         .on('data', function (chunk) {

          output += chunk;
         })
         .end('end', () => console.log(output));
           // console.log(response;
           */

}

getRepoContributors(repoOwner, repoName, function(err, result) {
  console.log("Errors:", err);
  var resultObj = JSON.parse(result.body);
  resultObj.forEach((item) => console.log(item.avatar_url))
});

/*
var GitHubApi = require("github");


var github = new GitHubApi({
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "/", // for some GHEs; none for GitHub

    headers: {
        "user-agent": "github-avatar-downloader" // GitHub is happy with a unique user agent
    },
    Promise: require('bluebird'),
    followRedirects: true, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000
});

// TODO: optional authentication here depending on desired endpoints. See below in README.

/*
github.users.getFollowingForUser({
    // optional
    // headers: {
    //     "cookie": "blahblah"
    // },
    username: "defunkt"
}, function(err, res) {
    console.log(JSON.stringify(res));
});

github.repos.getContributors({
  owner: "trrippy",
  repo: "hello-world"
}, function (err, res) {
  console.log(JSON.stringify(res));
  console.log(res);
  // body...
});
// console.log('This is the output of contributors \n');
// console.log(contributors);

//GET /users/:username obj.avatar_url this is the gif




//this will write to file the photo, hopefully

fs.writeFile(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }
  console.log("Successfully wrote to", filePath);
});
*/