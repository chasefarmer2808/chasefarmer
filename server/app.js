'use strict';

import express from 'express';

const app = express();

app.use(express.static('client'));

app.listen(3000, function() {
  console.log('listening on 3000');
})
