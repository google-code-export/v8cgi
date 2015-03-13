# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_Websocket'>proper version of this page</a>.</b></font> #
# Websocket module #

Defined in file `websocket.js`.

Classes: **Server**.

```
var Server = require("websocket").Server;
```
  * `var ws = new Server(ip, port, options)` - creates new Websocket listening server; the only available member of `options` object is a bool value "nodelay" (disable Nagle's TCP algorithm)
  * `ws.setDebug(bool)` - enable/disable debug logging
  * `ws.addApplication(app, host, path)` - registers an application (see below)
  * `ws.send(clientId, data)` - sends some `data` to a client identified by `clientId`
  * `ws.disconnect(clientId, code, message)` - disconnect a given client using an error code and error message
  * `ws.run()` - starts the server

## Server application ##

Websocket server application is a JS object with the following methods:

  * `onconnect(clientId, headers)` - client connects by sending these `headers`; the client is given a `clientId` for futher references
  * `onmessage(clientId, data)` - client sends data
  * `ondisconnect(clientId, code, message)` - client disconnected
  * `acceptsOrigin(origin)` - does this application allow this origin?
  * `chooseProtocol(protocols)` - challenge to choose a Websocket sub-protocol from a list of options

## Examples ##

```
/* simple websocket echo server: repeats received message to all clients */

var Server = require("websocket").Server;
var ws = new Server("0.0.0.0", 8888);

var clients = []; /* list of connected clients */
var app = {
	onmessage: function(client, data) {
		for (var i=0;i<clients.length;i++) {
			ws.send(clients[i], data);
		}
	},
	onconnect: function(client, headers) {
		clients.push(client);
	},
	ondisconnect: function(client, code, message) {
		var index = clients.indexOf(client);
		if (index != -1) { clients.splice(index, 1); }
	}
};

ws.addApplication(app);
ws.run();
```