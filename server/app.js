'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.static('./client/'));
app.use(express.static('./'));
app.use('/*', express.static('./client.index.html'));
//app.use('/client', express.static(__dirname + '/client'));
app.use(morgan('dev'));

app.all('/*', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
})

app.listen(3000, function() {
  console.log('listening on 3000');
});
