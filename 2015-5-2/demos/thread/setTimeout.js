/*//关于js的异步
setTimeout(function(){
	console.log('setTimeout!!!');
}, 0);

console.log('sync');

//关于线程阻塞
// setTimeout( function(){ while(true){} } , 100);
// setTimeout( function(){ console.log(’你好!’); } , 200);

setTimeout(function(){
	 console.log(3454);
}, 1000);

var num = 1000000;
while(num--);*/

while(true);