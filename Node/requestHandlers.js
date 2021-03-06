var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response,postData){
	console.log("Request handler 'start' was called.");
	var content = "empty";

	exec("ls -al",
	    { timeout: 10000, maxBuffer: 20000*1024 },
	    function (error, stdout, stderr) {
		    response.writeHead(200, {"Content-Type": "text/html",

			});
			var body = '<html>'+
		    '<head>'+
		    '<meta http-equiv="Content-Type" content="text/html; '+
		    'charset=UTF-8" />'+
		    '</head>'+
		    '<form action="/upload" enctype="multipart/form-data" '+
  			'method="post">'+
  			'<input type="file" name="upload">'+
  			'<input type="submit" value="Upload file" />'+
  			'</form>'+
		    '</body>'+
		    '</html>';
		    response.write(body);
		    response.end();
    });
	
}
function pixce(response) {
  console.log("Request handler 'pixce' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response,request){
	console.log("Request handler 'upload' was called.");
	var form = new formidable.IncomingForm();

	form.parse(request, function(error, fields, files) {
		
		console.log(files);
		files.upload.path = files.upload.path.replace('BIUBIU~1','BiuBiu_Jiao');
		files.upload._writeStream.path = files.upload.path;
		console.log(files);
		console.log("parsing done" + files.upload.path);
		// fs.renameSync(files.upload.path, "./tmp/test.png");
		// fs.renameSync("./upload/1.jpg", "./tmp/test.png");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("received image:<br/>");
		response.write("<img src='/show' />");
		response.end();
	});
}

function show(response, postData) {
	console.log("Request handler 'show' was called.");
	fs.readFile("./tmp/1.jpg", "binary", function(error, file) {
		if(error) {
		  response.writeHead(500, {"Content-Type": "text/plain"});
		  response.write(error + "\n");
		  response.end();
		} else {
		  response.writeHead(200, {"Content-Type": "image/jpg"});
		  response.write(file, "binary");
		  response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.pixce = pixce;
exports.show = show;
