# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/TaskList'>proper version of this page</a>.</b></font> #
# What needs to be done #

## Major tasks ##
  * Fix all acknowledged [issues](http://code.google.com/p/v8cgi/issues/list)

## Minor tasks ##
  * better process module
  * ODBC library
  * file copying without `mmap_*` (until mmap works on windows)

## Far tasks ##
  * mmap on windows

# What has been done recently #
  * eventloop module
  * readLine/writeLine
  * refactored error handling
  * stdin/stdout/stderr stream interface
  * websocket module
  * Socket.select
  * SSL/TLS
  * zlib
  * refactoring of existing code to support binary
  * Binary (as per commonjs spec)
  * MacOSX compilation & installation
  * reworked code layout (specific subclass for cgi binary)
  * test before using Cast()
  * multiple include paths
  * mainfile + conffile executed as modules
  * "module" metavariable, as per commonjs specification
  * MSVC -> MinGW
  * v8 debugging agent
  * Thorough testing of sqlite
  * configuration options for HTTP handler and error reporting
  * Thorough testing of reuse\_context
  * context-independent compiled scripts
  * basic process module
  * pgsql support
  * builds on MacOS
  * JSON-RPC handler
  * [ActiveRecord.js](http://activerecordjs.org/record.html) library
  * SQLite
  * Moving exports cache to global cache
  * reuse\_context implementation
  * better GC handling
  * removed System.header relic
  * MySQL connection closing
  * SSJS require()
  * do not attempt to load directories as script files
  * better suffix test for DSO loading
  * Merged JS/binary/library include
  * Apache module on windows
  * Apache module
  * GD
  * HTTP Client
  * Caching
  * FastCGI
  * mail()
  * Sockets
  * sleep()
  * .so/.dll loading
  * release 0.0.3 fixes fatal bug in afread()
  * [prototype enhancements](http://code.google.com/p/v8cgi/wiki/API_JS)
  * SQL [query helper](http://code.google.com/p/v8cgi/wiki/API_Query)
  * basic [templating](http://code.google.com/p/v8cgi/wiki/API_Template)
  * SHA1 and MD5 funcions
  * builds on Windows
  * configuration file
  * HTTP sessions
  * Base64 encoding/decoding, JSON (de)serialization
  * File::stat, Directory::stat
  * response cookies, onexit callbacks
  * rudimentary directory support (create, remove, list)
  * File::exists, Directory::exists
  * file copy & move operations