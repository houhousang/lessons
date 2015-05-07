var http = require('http'), url = require('url'), fs = require('fs');
var server = http.createServer(function(req, res){
	var u = url.parse(req.url);

	if(u.pathname === '/worker'){
		var jws = fs.createReadStream('./worker.js');
		jws.pipe(res);
	}else{
		var ips = fs.createReadStream('./index.html');
		ips.pipe(res);
	}
});
server.listen(3000, function(){
	console.log('success listened at port 3000');
});