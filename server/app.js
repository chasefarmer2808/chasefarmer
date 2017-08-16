'use strict';

import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.static('client'));
app.use('/client', express.static(__dirname + '/client'));
app.use(morgan('dev'));

app.all('/*', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
})

app.get('/', function(req, res) {
  console.log('someone is on the website');
});

app.listen(3000, function() {
  console.log('listening on 3000');
});
