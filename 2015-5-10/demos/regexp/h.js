var http = require('http');

http.get('http://www.baidu.com', function(res){
	var str = '';
	res.on('data', function(chunk){
		str += chunk.toString();
	});
	res.on('end', function(){
		console.log(str);
	});
});