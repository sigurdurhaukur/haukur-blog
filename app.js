const express = require('express');
const path = require('path');
const app = express();
const jsonServer = require('json-server');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// ...

// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults()); 
app.use('/blogs', jsonServer.router('/data/db.json'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);