// Node.js Express Hello World.  Can parse first and last name from url and give a specific hello to the parsed name.
var express = require('express');
var app = express();

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Hello World app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
  res.send('Hello Node.js Express World!');
});

app.get('/:firstname/:lastname', function(request, response) {
var first = request.params.firstname;
var last = request.params.lastname;
response.send(["Hello", first, last].join(" "));
});
