var arr_each = [].forEach;
	document.addEventListener('DOMContentLoaded', function(ev){
		var $forms = $d('.js-s_form');
		arr_each.call($forms, function($ele, i){
			$ele.addEventListener('submit', function(ev){
				ev.preventDefault();
				var $self = this, type = $self.getAttribute('data-type');
				window[ type + 'Storage' ].setItem('value', $self.nV.value);
			});
		});
	});

window.addEventListener('storage', function(ev){
	console.log(ev);
});

function $d(s){
	return document.querySelectorAll(s);
}
alert('sdgvdsgbdh');