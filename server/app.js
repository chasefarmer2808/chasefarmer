'use strict';

import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.static('client'));
app.use(morgan('dev'));

app.get('/', function(req, res) {
  console.log('someone is on the website');
});

app.listen(3000, function() {
  console.log('listening on 3000');
});
