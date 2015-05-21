//import
var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	qs = require('querystring'),
	util = require('util'),
	path = require('path'),
	evm = require('events').EventEmitter;

//Class Ev
function Ev(){
	evm.call(this);
}
util.inherits(Ev, evm);
//object e
var e = new Ev();

//server
var server = http.createServer(function(req, res){
	var iurl = url.parse(req.url);
	var arr_paths = iurl.pathname.split('/');
	arr_paths.splice(0,1);

	if(arr_paths[0] === 'appcache') e.emit('getStatic', arr_paths[1], res);
	else e.emit('renderIndex', res);
});
//listen port
server.listen(3000, function(){
	console.log('success listened at 3000');
});


//events bind
e.on('getStatic', function(p, res){
	if(!p){
		res.end('unknown source')
	}else{
		console.log(p);
		var source = fs.createReadStream( path.join(__dirname, 'appcache',p) );
		p === 'storage.appcache' ? res.setHeader('Content-Type', 'text/cache-manifest') : void 0;
		source.pipe(res);
		source.on('error', function(err){
			res.end(err.toString());
		});	
	}
	
	
});

e.on('renderIndex', function(res){
	var p = path.join(__dirname, 'storage.html');
	var html = fs.createReadStream(p);
	html.pipe(res);
});