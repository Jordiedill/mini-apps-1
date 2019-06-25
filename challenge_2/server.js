var express = require('express');
var app = express();


app.use(express.static('client'));

console.log('Yay!');

app.listen(3000);

