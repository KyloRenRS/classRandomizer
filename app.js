'use strict';

/* Constants for required node modules, app is the name of the express router*/
const express = require('express');
const app = express();
const fs = require('fs');

/* Serve files out of the public directory, not the root directory */
app.use(express.static(__dirname + '/public'));


app.listen(3000, function () {
  console.log('listening on http://localhost:3000');
});
