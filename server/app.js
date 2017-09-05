'use strict';

const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

const port = process.env.PORT | 8080;

var appDir = 'src';

if (process.env.NODE_ENV == 'production') {
  appDir = 'dist';
}

app.use(express.static(path.join(__dirname, `../${appDir}/`)));
app.use(express.static('./'));
app.use(favicon(path.join(__dirname, '../src/assets', 'favicon.ico')));
app.use(morgan('dev'));

app.all('/*', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, `../${appDir}`) });
})

app.listen(port, function() {
  console.log(`Listening on ${port}`);
});
