
var express = require("express");

var app = express();

var path = require("path");

var port = process.env.PORT || "3000";

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/kate',express.static(path.join(__dirname, 'public/kate')));

app.use('/Scott',express.static(path.join(__dirname, 'public/Scott')));

app.use('/Claire',express.static(path.join(__dirname, 'public/Claire')));

app.use('/tyler',express.static(path.join(__dirname, 'public/tyler')));

app.use('/Joie',express.static(path.join(__dirname, 'public/Joie')));

app.listen(port, function() {console.log("port 3k")});
