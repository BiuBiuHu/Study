var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");


var handler= {};
handler["/"] = requestHandlers.start;
handler["/start"] = requestHandlers.start;
handler["/upload"] = requestHandlers.upload;
handler["/pixce"] = requestHandlers.pixce;
handler["/show"] = requestHandlers.show;


server.start(router.router,handler);