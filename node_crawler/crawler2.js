var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var app = express();
var port = 8000;

var url = 'http://www.indeed.com/cmp/Geritology/jobs/Web-Developer-e08a86e3280347d6?sjdu=Zzi_VW2ygsY1fzh3Ma9ZsPaqOkFrOZiF9heaw3NaNTgJmt1feZo-KQ4sBb2aXbUKG-ox15JTk_FNIIO3dhNrTA';

request(url,function(err,resp,body){
  var $ = cheerio.load(body);
  var companyName = $('.company');
  var companyText = companyName.text();

  // $('.company').filter(function(){
  //   var companyName = $(this);
  // });
  var jobTitle = $('.jobtitle font');
  var jobTitleText = jobTitle.text();

  var location = $('.location');
  var locationText = location.text();

  var summary = $('#job_summary p');
  var summaryText = summary.text();
  console.log('test');

  var job = {
    title:jobTitleText,
    company:companyText,
    location:locationText,
    summary:summaryText
  }

  console.log(job);

});

// var destination = fs.createWriteStream('./downloads/google.html');

app.listen(port);
console.log('server is on' + port);
