/*this的指向问题*/
//定义：指向所属的那个对象

//1.在全局中
console.log(this);

//2.在普通的函数中
(function(){
	console.log(this);
})();

//3.在去全局函数的函数中
function fn(){
	//todo解决办法
	(function(){
		console.log(this);
	})();
}
fn();

//4.
var o = {
	sayInO: function(){   //方法中
		console.log(this);
	},
	sayInC: function(){   //闭包中
		return function(){
			console.log(this);
		};
	},
	sayInT : function(){   //在一些全局函数中即window下的方法
		setTimeout(function(){
			console.log(this);
		}, 0);
	}
};
o.sayInO();
o.sayInC()();

//5.call,apply和bind
var fnb = function(){ console.log(this); }.bind(o);
fnb();
(function(){
	console.log(this);
}).call(o);

//6.事件绑定中
var tDiv = document.createElement('div');
tDiv.style.cssText = 'width:200px; height:200px; background-color : red';
tDiv.onclick = function(){
	console.log(this);
};
tDiv.addEventListener('mouseover', function(){
	console.log(this);
});
//  <=ie8
tDiv.attachEvent('onmouseover', function(){
	console.log(this);
	//todo解决办法
});
document.appendChild(tDiv);
