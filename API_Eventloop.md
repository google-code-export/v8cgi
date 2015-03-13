# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_Eventloop'>proper version of this page</a>.</b></font> #
# Event loop module #

Defined in file `eventloop.js`.

```
var eventloop = require("eventloop");
```
  * `var id = eventloop.setTimeout(callback, delay)` - delayed execution; delay in msec
  * `var id = eventloop.setInterval(callback, period)`
  * `eventloop.clearTimeout(id)`, `eventloop.clearInterval(id)`
  * `var id = eventloop.readSocket(callback, socket)` - will be executed once the socket is ready for reading
  * `var id = eventloop.writeSocket(callback, socket)` - will be executed once the socket is ready for writing
  * `eventloop.clearSocket(id)`, `eventloop.clearSocket(socket)` - cancel the scheduled listener(s)
  * `eventloop.run(timeout)` - enter the main loop; timeout is optional
  * `eventloop.abort()` - abort from a callback

## Example usage ##

```
var loop = require("eventloop");

loop.setInterval(function() { /* write dots every 500msec */
  system.stdout.writeLine("...");
}, 500);

loop.setTimeout(function() { /* abort looping after three seconds */
  loop.abort();
}, 3000);

loop.run();
```