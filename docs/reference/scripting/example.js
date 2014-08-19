function preRead(request, libraries) {
	print("Hello incoming request for " + request.path);
}

function postRead(response, libraries) {
	print("Goodbye outgoing response for " + response.request.path);
}
