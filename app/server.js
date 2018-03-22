const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const setEnv = require('./set-env')

// app.use('/', express.static(__dirname +  '/'));
app.use(express.static(path.join(__dirname +  '/src/public')));

app.get('/callback', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/public/index.html'));
});

//use middleware
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//define routes
app.use('/', require('./src/routes/router'));

const hostname = '0.0.0.0';  //process.env.HOST || 
const port = 5000;

const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);  
});