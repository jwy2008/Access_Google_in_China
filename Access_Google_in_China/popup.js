function f() {
	if (window.location.href.indexOf("www.google.cn")) {
		window.location.href = "https://gogogle.cf/" + window.location.href.slice(21);
	}
	f();
}
f();