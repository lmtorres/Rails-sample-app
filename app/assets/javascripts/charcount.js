$(window).load(function() {
	document.getElementById('micropost_content').onkeyup = function() {
		document.getElementById('count').innerHTML = (140 - this.value.length) + " characters left";
	};
});