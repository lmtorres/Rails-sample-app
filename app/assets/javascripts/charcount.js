var ready;
ready = function() {
	var countElement = document.getElementById('count');
	var contentElement = document.getElementById('micropost_content');
	contentElement.onkeyup = function() {
		var count = (140 - this.value.length);
		if (count < 0){
			countElement.style.color = "#ff0000";
			contentElement.style.border = "1px solid #b94a48";
		}else{
			countElement.style.color = "#000000";
			contentElement.style.border = "1px solid #bbbbbb";
		}
		countElement.innerHTML = count + " characters left";
	};
};

$(document).ready(ready);
$(document).on('page:load', ready);