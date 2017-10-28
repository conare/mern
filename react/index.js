var express = require('express');

// Constants
var PORT = 4000;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world from conare\n');
});

app.listen(PORT);