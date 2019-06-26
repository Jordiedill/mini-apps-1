var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(path.join(__dirname,'public')));

// app.get('/', (req,res) => {
//     res.send('Yay!');
// });

app.listen(3000, () => {
    console.log('Youre fucking awesome');
});