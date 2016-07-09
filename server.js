'use strict';

var express = require('express');

var app = express();

//Sets the port to whatever Heroku is using, and if local to 3000.
var port = process.env.PORT || 3000;

//Tells the program to use the public folder for the homepage, utilizing the index.html.
app.use('/', express.static('public'));

//Tells the program where the application files are.
app.use('/app', express.static('app'));


//Sets our server up on port 3000.
app.listen(port, function(){
  console.log('Server on port:' + port);
});
