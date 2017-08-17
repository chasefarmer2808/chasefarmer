'use strict';

const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/')));
app.use(express.static('./'));
app.use(favicon(path.join(__dirname, '../client/assets', 'favicon.ico')));
app.use(morgan('dev'));

app.all('/*', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../client') });
})

app.listen(3000, function() {
  console.log('listening on 3000');
});
