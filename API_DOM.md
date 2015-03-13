# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_DOM'>proper version of this page</a>.</b></font> #
# DOM module #

Defined in file `dom.js`.

Classes: **Document**, **XMLSerializer**, **DOMParser**.

This JS module implements a large subset of the XML portion of DOM as described at https://developer.mozilla.org/en/dom.

Example usage:

```
var DOM = require("dom");
var parser = new DOM.DOMParser();
var serializer = new DOM.XMLSerializer();

var xmlStr = "<root><node1 /><node2 a='b'>xxx</node2></root>";
var xmlDoc = parser.parseFromString(xmlStr);
system.stdout(xmlDoc.getElementsByTagName("node2")[0].getAttribute("a") + "\n");
system.stdout(serializer.serializeToString(xmlDoc));
```