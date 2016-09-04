window.redirectToUser = function() {
	var userName = document.getElementsByClassName('search--input')[0].value;

	if (userName && userName.length>0) {
		window.location.replace('/' + userName);
	}
}
