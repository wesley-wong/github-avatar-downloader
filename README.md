# Github Avatar Downloader
*This is the project for the second week of Lighthouse Labs*

### Project Description

### Goal
In this project you'll build a command-line HTTP client that will request the avatars for all contributers to a given project on GitHub, and download them to disk.

In doing so, you will learn about how to break down larger problems into smaller steps and work incrementally towards your solution. You'll also learn more about topics such as HTTP, APIs, JSON, the file system and how you can work with all of those things through JavaScript and Node.

### Problem Statement
Given a GitHub repository name and owner, download all the contributors' profile images and save them to a subdirectory, avatars/.
Expected Usage
Your program should be executed from the command line in the following manner,

```
node download_avatars.js jquery jquery
```

Any valid repo-owner + repo combination can be used, such as this:


```
node download_avatars.js nodejs node
```

### Functional Requirements
As an open source project leader,
I want a folder with the avatars of all of my github project's contributors
so that I can use them in a website.

- Given

  - I have node installed
  - I am in the shell

- When

  - I execute your file using node, providing a github user and repository as command-line arguments For example:

```
$ node download_avatars.js nodejs node
```

- Then

  - I should find a folder called avatars in my current directory
  - The avatars folder should contain images corresponding to the avatars of the contributors of the repo
  - The name of each image file should be the contributor's name and the file extension (ex. johnny.png)

### Implementation Requirements

- uses 'request' library to make the HTTP requests
- uses git for version control

### Outcomes

- can use curl to issue simple GET requests
- can use curl for non-trivial requests
- can explain what is meant by "rate limit" and why they are used
can explain what is meant by "API" and why they are used
