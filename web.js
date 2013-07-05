var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

data = fs.readFileSync('index.html');
str = data.toString()
//console.log("Read...."+ data);
//console.log("Read...."+ str);
