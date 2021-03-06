var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var textfile = new Buffer(256);
textfile = fs.readFileSync("index.html");

var string_file = textfile.toString();

app.get('/', function(request, response) {
  response.send(string_file);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
