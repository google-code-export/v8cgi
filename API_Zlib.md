# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_Zlib'>proper version of this page</a>.</b></font> #
# Zlib module #

Defined in files `zlib.so`/`zlib.dll`/`zlib.dylib`.

  * `var result = compress(input, [level])`
  * `var output = decompress(result)`

Both input and output are instances of Buffer. Level (compression strength) is a number from 0 to 9 inclusive.