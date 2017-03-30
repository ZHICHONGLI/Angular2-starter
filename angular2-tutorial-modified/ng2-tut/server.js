var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
//var fs = require('fs');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/dist')));

var port = process.env.PORT || 4200;

var router = express.Router();
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist', 'index.html'));
  // res.send("Hello World");
});

app.use('', router);

app.listen(port);
console.log('Magic happens on port ' + port);