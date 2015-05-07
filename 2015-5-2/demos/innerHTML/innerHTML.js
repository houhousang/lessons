//国外的一个函数   http://blog.stevenlevithan.com/archives/faster-than-innerhtml
//http://lveyo.iteye.com/blog/182891
// 此方法大大提高了 innerHTML 在 Firefox 和 Safari 上的性能。replaceHtml() 在 Firefox 2.0.0.6 里 destroy 与 replace 的速度各快了 473 倍以及 50 倍。而在 Safari 3.0.3 beta 上则是 create 100 倍，replace 50 倍。
// 对于 Opera 也依然有性能提高，只是提高幅度没有上面两种浏览器惊人而已，
// function replaceHtml(el, html) {
// 	var oldEl = typeof el === "string" ? document.getElementById(el) : el;
// 	/*@cc_on // Pure innerHTML is slightly faster in IE
// 		oldEl.innerHTML = html;
// 		return oldEl;
// 	@*/
// 	var newEl = oldEl.cloneNode(false);
// 	newEl.innerHTML = html;
// 	oldEl.parentNode.replaceChild(newEl, oldEl);
// 	/* Since we just removed the old element from the DOM, return a reference
// 	to the new element, which can be used to restore variable references. */
// 	return newEl;
// };






//来看个例子使用原生DOM和 innerHTML来创建1000 《高性能javascript》66页

//创建wrapper
var div = document.createElement('div');
div.id = 'here';
document.body.appendChild(div);
console.log(div);

//DOM原生
// function tableDOM() {
// var i, table, thead, tbody, tr, th, td, a, ul, li;
// tbody = document.createElement ('tbody');
// for (i = 1; i <= 1000; i++) {
// tr = document.createElement ('tr');
// td = document.createElement ('td');
// td.appendChild(document.createTextNode((i % 2) ? 'yes' : 'no'));
// tr.appendChild(td);
// td = document.createElement ('td');
// td.appendChild(document.createTextNode(i));
// tr.appendChild(td);
// td = document.createElement ('td');
// td.appendChild(document.createTextNode('my name is #' + i));
// tr.appendChild(td);
// a = document.createElement ('a');
// a.setAttribute('href', 'http://example.org/' + i + '.html');
// a.appendChild(document.createTextNode('http://example.org/' + i + '.html'));
// td = document.createElement ('td');
// td.appendChild(a);
// tr.appendChild(td);
// ul = document.createElement ('ul');
// a = document.createElement ('a');
// a.setAttribute('href', 'edit.php?id=' + i);
// a.appendChild(document.createTextNode('edit'));
// li = document.createElement ('li');
// li.appendChild(a);
// ul.appendChild(li);
// a = document.createElement ('a');
// a.setAttribute('href', 'delete.php?id=' + i);
// a.appendChild(document.createTextNode('delete'));
// li = document.createElement ('li');
// li.appendChild(a);
// ul.appendChild(li);
// td = document.createElement ('td');
// td.appendChild(ul);
// tr.appendChild(td);
// tbody.appendChild(tr);
// }
// tr = document.createElement ('tr');
// th = document.createElement ('th');
// th.appendChild(document.createTextNode('yes?'));
// tr.appendChild(th);
// th = document.createElement ('th');
// th.appendChild(document.createTextNode('id'));
// tr.appendChild(th);
// th = document.createElement ('th');
// th.appendChild(document.createTextNode('name'));
// tr.appendChild(th);
// th = document.createElement('th');
// th.appendChild(document.createTextNode('url'));
// tr.appendChild(th);
// th = document.createElement('th');
// th.appendChild(document.createTextNode('action'));
// tr.appendChild(th);
// thead = document.createElement('thead');
// thead.appendChild(tr);
// table = document.createElement('table');
// table.setAttribute('border', 1);
// table.setAttribute('width', '100%');
// table.appendChild(thead);
// table.appendChild(tbody);
// document.getElementById('here').appendChild(table);
// };

// tableDOM();

// innerHTML
// function tableInnerHTML() {
// var i, h = ['<table border="1" width="100%">'];
// h.push('<thead>');
// h.push('<tr><th>id<\/th><th>yes?<\/th><th>name<\/th><th>url<\/th><th>action<\/th><\/tr>');
// h.push('<\/thead>');
// h.push('<tbody>');
// for (i = 1; i <= 1000; i++) {
// h.push('<tr><td>');
// h.push(i);
// h.push('<\/td><td>');
// h.push('And the answer is... ' + (i % 2 ? 'yes' : 'no'));
// h.push('<\/td><td>');
// h.push('my name is #' + i);
// h.push('<\/td><td>');
// h.push('<a href="http://example.org/' + i + '.html">http://example.org/' + i + '.html<\/a>');
// h.push('<\/td><td>');
// h.push('<ul>');
// h.push(' <li><a href="edit.php?id=' + i + '">edit<\/a><\/li>');
// h.push(' <li><a href="delete.php?id="' + i + '-id001">delete<\/a><\/li>');
// h.push('<\/ul>');
// h.push('<\/td>');
// h.push('<\/tr>');
// }
// h.push('<\/tbody>');
// h.push('<\/table>');
// document.getElementById('here').innerHTML = h.join('');
// };

// tableInnerHTML();