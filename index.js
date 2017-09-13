var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/draw/', function(req, res){
    res.sendFile(__dirname + '/index.html?draw=true');
});
io.on('connection', function(socket){
    console.log('a user connected');
});

var port = process.env.PORT || 3000;

http.listen(port, function(){
    console.log('listening on *:'+port);
});