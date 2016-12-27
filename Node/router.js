function router(handler,pathname,response,request){
	console.log("About to route a request for " + pathname);
	if(typeof handler[pathname] === 'function'){
		handler[pathname](response,request);
	}else{
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 not found!");
		response.end();
	}
}

exports.router = router;