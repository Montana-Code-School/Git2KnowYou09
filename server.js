
var express = require("express");

var app = express();

var path = require("path");

var port = process.env.PORT || "3000";

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/kate', express.static(path.join(__dirname, 'public/kate')));

app.use('/scott', express.static(path.join(__dirname, 'public/scott')));

app.use('/claire', express.static(path.join(__dirname, 'public/claire')));

app.use('/tyler', express.static(path.join(__dirname, 'public/tyler')));

app.use('/kate', express.static(path.join(__dirname, 'public/joie')));

app.listen(port, function() {console.log("port 3k")});
