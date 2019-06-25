var express = require('express');
var app = express();
var path = require('path');


app.use('/', express.static(path.join(__dirname, 'client')));
//app.use(urlencoded({extended: true}));

app.post('/submitform', ((req,res) => {
    res.send('YAY POSTING')
    console.log('YAY POSTING!');
}))

app.get('/', ((req, res) => {
  res.send('Yay')
}))

console.log('Yay!');

app.listen(3000);

