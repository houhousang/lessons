var http  = require('http');

var server = http.createServer(function(reqm, res){
	res.end('asug');
});

server.listen(4000, function(){
	console.log('listening at 4000');
});