// Initializing libraries and getting the required modules
var expres = require("express");
var app = expres();
var httpi = require('http').Server(app);
var io = require('socket.io')(httpi);
var porty = process.env.PORT||8000;

// Writing the http verbs/ callback functions to make the server responsive

app.get('/',function(req,res){
	// res.send("Hi"); To print something onto the screen 
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
 		io.emit('chat message', msg);
 	});
});

httpi.listen(porty,function(){
	console.log('Hearing on ' + porty);
});
