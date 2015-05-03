var arr = [1,2,3,4];

console.log(typeof arr);
console.log(arr instanceof Array);
console.log(arr.constructor == Array);
console.log( Array.isArray(arr) );
console.log( Object.prototype.toString.call(arr) );

//以下来自underscore
//判断数组
  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  // _.isArray = Array.isArray || function(obj) {
  //   return toString.call(obj) == '[object Array]';
  // };

//判断其他类型
  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  // each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
  //   _['is' + name] = function(obj) {
  //     return toString.call(obj) == '[object ' + name + ']';
  //   };
  // });


//可以类似
var _ = {};

  _.isArray = Array.isArray || function(obj) {    //判断数组
    return toString.call(obj) == '[object Array]';
  };

['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'].forEach(function(name){    //判断其他类型
	_['is' + name] = function(obj){
		return toString.call(obj) == '[object '+ name + ']';
	}
});