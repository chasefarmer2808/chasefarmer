'use strict';

const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const config = require('./config');

const app = express();

app.use(express.static(path.join(__dirname, '../client/')));
app.use(express.static('./'));
app.use(favicon(path.join(__dirname, '../client/assets', 'favicon.ico')));
app.use(morgan('dev'));

app.all('/*', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../client') });
})

app.listen(config.port, '0.0.0.0', function() {
  console.log(`listening at port ${config.port}`);
});
