#闭包

###先看一个例子

		var varg = 'global';
		function fn1(){
			var var1 = 'fn1';
			
			function fn2(){
					console.log(varg);
					console.log(var1);
					var1 = 'fn2';
                    varg = 'fn2';
            }			

			fn2();
			console.log(var1);
        }
		
		console.log(var2);


*	什么是作用域?
*	什么是垃圾回收?
*	什么是闭包?
*	闭包的作用?
