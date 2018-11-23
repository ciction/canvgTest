
// const { createCanvas, loadImage } = require('canvas');
// const canvas = createCanvas(200, 200);
// const ctx = canvas.getContext('2d');



var express = require('express');
var app = express();
app.get('/', function (req, res) {
  // res.send('Hello World!');
    res.sendfile(__dirname + '/public/index.html');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});