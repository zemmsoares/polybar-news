var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var Xray = require('x-ray');

var x = Xray();

app.get('/news', function(req, res){


  /*
   First Result only
  x('https://www.dn.pt/ultimas.html', '.t-article-list-1-body', 'li')(function(err, data) {
    res.send(data) // Google
  })
  */

 x('https://www.dn.pt/ultimas.html', '.t-article-list-1-body', 'a@href')(function(err, data2) {
    x('https://www.dn.pt/ultimas.html', '.t-article-list-1-body', 'li')(function(err, data) {
    data = data.trim();
    data = data.replace(/\s\s+/g, ' ');
    res.send(JSON.stringify({Provider: 'Diário de Notícias', Article: data, Link: data2 }));
    })
 })


})

app.listen(3000);

exports = module.exports = app;

