var ready;
ready = function() {
	document.getElementById('micropost_content').onkeyup = function() {
		var count = (140 - this.value.length);
		if (count < 0){
			document.getElementById('count').style.color = "#ff0000";
			document.getElementById('micropost_content').style.border = "1px solid #b94a48";
		} else{
			document.getElementById('count').style.color = "#000000";
			document.getElementById('micropost_content').style.border = "1px solid #bbb";
		}
		document.getElementById('count').innerHTML = count + " characters left";
	};
};

$(document).ready(ready);
$(document).on('page:load', ready);