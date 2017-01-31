var sentiment = require('sentiment');
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');

  var r1 = sentiment('Cats are stupid.');
  console.log(r1);        // Score: -2, Comparative: -0.666

  var r2 = sentiment('Cats are totally amazing!');
  console.log(r2);        // Score: 4, Comparative: 1

});
server.listen(3000);
