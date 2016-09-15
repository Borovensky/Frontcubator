var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('static'));

app.get('/', function(req, res){
    fs.readFile('index.html','utf8',function(err, data){
        console.log(data);
        res.send(data);
    });
});

app.listen('1331');