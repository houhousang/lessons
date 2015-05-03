var http = require('http'), url = require('url'), fs = require('fs');

var server = http.createServer();
server.listen(3000);

server.on('request', function(req, res){
	var pUrl = url.parse(req.url);
	if(pUrl.pathname === '/ajax') ajax(req, res);
	else {
		var rs = fs.createReadStream('./index.html');
		rs.pipe(res);
	}
});

function ajax(req, res){
	var buf  = [], size = 0, data = null;
	req.on('data', function(chunk){
		buf.push(chunk);
		size += chunk.length;
	});
	req.on('end', function(){
		data = Buffer.concat(buf, size);
		res.writeHeader(200, {'Contne-Type' : 'application/json'});
		res.end(data);
	});
}