# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_Binary_B'>proper version of this page</a>.</b></font> #
# Binary module #

Defined in files `binary-b.js` and `binary-b.so`/`binary-b.dll`/`binary-b.dylib`. To read more about binary data handling in general, see [Binary](Binary.md).

## Binary/B ##

This module aims to implement the [CommonJS Binary/B](http://wiki.commonjs.org/wiki/Binary/B) specification. The implementation differs from the standard a bit:

  * `indexOf`/`lastIndexOf`/`split`/`splice`/`displace` accepts only `Number` as data argument(s)
  * `pop`/`push`/`shift`/`unshift` methods accept `Number`, `Array`, `ByteString` and `ByteArray` arguments
  * `new ByteString()` does not throw
  * `ByteString.join == ByteArray.join`