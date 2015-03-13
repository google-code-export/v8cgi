# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_JsonRpcHandler'>proper version of this page</a>.</b></font> #
# Json-Rpc handler module #

Defined in file `jsonRpcHandler.js`.

Based on the [JSON-RPC 2.0 Specification proposal](http://groups.google.com/group/json-rpc/web/json-rpc-1-2-proposal).

### Code example ###
 var jsonRpcHandler = require("jsonRpcHandler.js").jsonRpcHandler;

 jsonRpcHandler({

	multiply: function(opts) {
		// Do what you want...
		return opts.a*opts.b;
	}
	
 );

}}```