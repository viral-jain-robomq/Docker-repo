console.log("Hello Docker. This is a sample docker image");


var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..
    res.write('<h1>This is a sample docker container</h1>');

});

console.log("hello123");

server.listen(8080); //3 - listen for any incoming requests

console.log('Node.js web server at port 8080 is running..')