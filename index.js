var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/public/index.html');
}).configure(function() {
    app.use('/', express.static(__dirname + '/public'));
    app.use('/jsrepl', express.static(__dirname + '/jsrepl'));
    app.use('/node_modules', express.static(__dirname + '/node_modules'));
    app.use('/extern', express.static(__dirname + '/extern'));
}).listen(port);
