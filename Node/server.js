var http = require("http");
var url = require("url");
var formidable = require("formidable");

function start(route,handler){
	function onRequest(request, response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Required for" + pathname + " received.");

		request.setEncoding("utf8");
		
		// route(handler,pathname,response);
		request.addListener("data", function(postDataChunk) {
    		postData += postDataChunk;
    		console.log("Received POST data chunk '"+
    		postDataChunk + "'.");
    	});

	    request.addListener("end", function() {
	    	route(handler, pathname, response, postData);
	    });
	}

	//函数作为参数传递
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;

// var http = require("http");
//   createServer的参数是一个匿名函数，那么也就可以传递一个函数作为参数给createServer
// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);