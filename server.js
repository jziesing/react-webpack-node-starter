/*
 * @Server.js
 */
"use strict";


let express = require('express'),
path = require('path');

//  create server app
let app = express();
let port = process.env.PORT || 3000;

// serve front end
const publicPath = path.join(__dirname, '/public/');
app.use(express.static(publicPath));

// run
app.listen(port, () => console.log( "Express server listening on port " + port) );