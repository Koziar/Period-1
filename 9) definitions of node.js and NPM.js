/*
 NODE JS
 Node.js is a server side platform built on Google Chrome's JavaScript Engine (V8 Engine).
 Node.js was developed by Ryan Dahl in 2009. --> link to the original presentation:
                            https://www.youtube.com/watch?v=ztspvPYybIY

 The definition of Node.js as supplied by its official documentation is as follows −

 Node.js is a platform built on Chrome's JavaScript runtime
 for easily building fast and scalable network applications on the server side.
 Node.js uses an event-driven, non-blocking I/O model that makes it
 lightweight and efficient, perfect for data-intensive real-time applications
 that run across distributed devices.

 Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications.

 what is it not?
 - a web framework
 - for beginners (very low level, network communication)
 - multi-threaded!

 */

var http = require('http');

http.createServer(function (req, res) { // <-- request event
    res.writeHead(200);
    res.write("Dog is running");
    setTimeout(function () { // <-- timeout event
        res.write("Dog is done.");
        res.end();
    }, 5000);

}).listen(8080);

/*
 Node Package Manager (NPM)
 It provides following two main functionalities:
 >Online repositories for node.js packages/modules which are searchable on search.nodejs.org
 >Command line utility to install Node.js packages, do version management
 and dependency management of Node.js packages.

 NPM makes it easy for JS developers to share and reuse code, and it makes it easy
 to update the code that you're sharing.
 In a project with many dependencies NPM can be a life saver when it comes to
 updating packages, downloading new ones and removing no longer used ones with simple
 commands like npm update, npm install "package to be installed" or npm prune.

 In every Node project that uses many dependencies a package.json with information about the
 dependencies their version the entry point of an application.
 */