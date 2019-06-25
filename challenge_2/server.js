var express = require('express');
var app = express();
var path = require('path');


app.use('/', express.static(path.join(__dirname, 'client')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/submitform', (req,res) => {
    var body = req.body;
    console.log(body);
    res.send(body);
})

app.get('/', ((req, res) => {
  res.send('Yay')
}))

console.log('Yay!');

app.listen(3000);

