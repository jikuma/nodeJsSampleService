'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello Docker hub. CD should automatically update the azure web app.\n');
});

app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);
