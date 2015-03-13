# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/Binary'>proper version of this page</a>.</b></font> #
# Binary support in v8cgi #

Javascript does not offer a suitable binary data type per se. For this reason, several proposals were created by [CommonJS](http://www.commonjs.org/); see all of them at http://wiki.commonjs.org/wiki/Binary. Recently, support for [Binary/F](http://wiki.commonjs.org/wiki/Binary/F) was added to v8cgi.

## Working with binary data in Javascript ##

A "binary" module is available. This module exports one class, the `Buffer`. You are highly encouraged to use it as well as test function arguments type against it:

```
var Buffer = require("binary").Buffer;

function reverseBuffer(input) {
  in (!(input instanceof Buffer)) { throw new TypeError("Bad argument"); }

  var i = input.length;
  var output = new Buffer(i);
  while (--i) { output[i] = input[input.length-i]; }

  return output;
}
```

## Exposing and using binary data from native modules ##

### C++ code ###

```
#include "macros.h"

v8::Handle<v8::Value> test;

/* testing for binary value */
if (IS_BINARY(test)) { ... }


/* high-level access */

/* converting value to array of chars */
size_t size = 0;
char * data = JS_BUFFER_TO_CHAR(test, &size);

/* converting array of chars to value */
return JS_BUFFER(data, size);


/* low-level access */

/* converting value to bytestorage */
ByteStorage * bs = JS_TO_BYTESTORAGE(test);

/* converting bytestorage to value */
test = BYTESTORAGE_TO_JS(bs);
```

### Compile with ###

  * src/app
  * src/path
  * src/cache
  * src/lib/binary/bytestorage