var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var app = express();
var port = 8000;

var destination = fs.createWriteStream('./downloads/google.html');
var url = "http://google.com";

request(url)
  .pipe(destination)
  .on('finish', function(){
    console.log('done');
  })
  .on('error', function(){
    console.log(err);
  });

app.listen(port);
console.log('server is on' + port);
