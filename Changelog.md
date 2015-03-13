# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/Changelog'>proper version of this page</a>.</b></font> #
# Version 0.9.3 (8.6.2012) #

  * improved websocket support, wss support
  * more robust socket, tls and websocket modules
  * tls support for windows
  * support for apache 2.4
  * bugfixes

# Version 0.9.2 (15.12.2011) #

  * refactored error handling
  * tls module
  * removed include() and libraryAutoload
  * ubuntu packages at https://launchpad.net/~ondras/+archive/v8cgi
  * stream interfaces for stdin/stdout/stderr
  * numerous bugfixes
  * websocket library
  * numerous improvements in sockets module

# Version 0.9.1 (26.9.2011) #

  * faster global object reusing
  * refactored error handling
  * thread safety
  * better HTTP uploads in http.js and apache module
  * performance fixes
  * numerous bugfixes

# Version 0.9.0 (9.12.2010) #

  * FreeBSD support
  * binary/f used everywhere
  * zlib module
  * memcached module
  * fibers module
  * profiler module
  * session is now not created automatically
  * old module "util" is now "mail", "base64" and "hash"
  * many DOM improvements
  * stability fixes

# Version 0.8.2 (23.5.2010) #

  * segfault fix in accept()
  * incorrect SConstruct in source package

# Version 0.8.1 (12.5.2010) #

  * http globals moved to js module
  * native apache header support
  * require-related fixes
  * binary-f, old binary renamed to binary-b
  * better entity handling in dom module
  * removed config.httpHandler
  * apache module builds on snow leopard

# Version 0.8.0 (8.2.2010) #

  * new commonjs-compatible test/assert modules
  * multi-mysql-queries
  * Binary/B module
  * GC support refactored
  * support for hybrid modules
  * all source files renamed
  * easier building on mac
  * several memory leaks fixed
  * individual require for each module, require.main
  * usleep
  * v8cgi free variable
  * HTTP basic auth
  * new JS-DOM library (old DOM renamed to XDOM)

# Version 0.7.5 (16.11.2009) #

  * MinGW used instead of MSVC
  * Global variables cleared on each request with context reusing
  * Modules/1.1 compatibility
  * Main file executed as module
  * Multiple search roots
  * DOM and PgSQL compiles on windows
  * Refactoring: CGI version has own class