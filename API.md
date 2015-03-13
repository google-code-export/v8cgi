# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API'>proper version of this page</a>.</b></font> #

# API Documentation #

Brief list of available functions, objects, properties and methods

## Built-in functions ##

These are automatically available once you launch v8cgi.

### Global functions ###

  * `global` - reference to global object
  * `require(module)` - includes other module in a way compatible with http://wiki.commonjs.org/wiki/Modules/1.1.1. Module's contents are executed within a separate scope; loaded file must register its exports in an `exports` object, which is returned from this call. Module's file is searched according to these rules:
    1. module name must not contain extension
    1. absolute module name = file name
    1. relative module name starting with a dot = relative to the module currently being executed
    1. relative module name NOT starting with a dot = relative to global module directory (set in config file)
  * `onexit(func)` - adds `func` as onexit callback
  * `exit()` - terminate execution

### System functions ###

#### stdin ####
  * `system.stdin.read(count)` - read `count` bytes from standard input. The data is returned as an instance of Buffer. If `count` == 0, all available data is read.
  * `system.stdin.readLine([count])` - reads a line from standard input. If `count` is not specified, reads up to 65535 bytes. When no data is available, returns null.

#### stdout ####
  * `system.stdout.write(data)` - write `data` to standard output. Data can be either string or Buffer.
  * `system.stdout.writeLine(data)` - write `data` followed by a line break to standard output. Data can be either string or Buffer.
  * `system.stdout.flush()` - flushes stdout

#### stderr ####
  * `system.stderr.write(data)` - write `data` to standard error output. Data can be either string or Buffer.
  * `system.stderr.writeLine(data)` - write `data` followed by a line break to standard error output. Data can be either string or Buffer.
  * `system.stderr.flush()` - flushes stderr

#### misc ####
  * `system.env` - hash with environment variables. Read-only.
  * `system.getcwd()` - returns current working directory
  * `system.sleep(num)` - delays execution for `num` seconds
  * `system.args` - array with command-line arguments
  * `system.usleep(num)` - delays execution for `num` microseconds
  * `system.getpid()` - returns current process's ID

## Available modules ##

v8cgi comes with a set of modules which act as code libraries, containing extended functionality, classes, methods and functions.

Modules are represented by files (`.js`, `.so`, `.dll`, `.dylib`) and can be loaded with `require()` call.

| **Module name** | **Summary** | **Module type** | **Documentation** |
|:----------------|:------------|:----------------|:------------------|
| active\_record | Active Record stuff | js | [API\_ActiveRecord](API_ActiveRecord.md) |
| assert | CommonJS assertions | js | [API\_Assert](API_Assert.md) |
| base64 | Base64 encoding and decoding | js | [API\_Base64](API_Base64.md) |
| binary | CommonJS Binary/F Buffer | hybrid | [API\_Binary](API_Binary.md) |
| binary-b | CommonJS Binary/D | hybrid | [API\_Binary\_B](API_Binary_B.md) |
| dom | DOM, Serializer, Parser  | js | [API\_DOM](API_DOM.md) |
| eventloop | Global asynchronous event loop  | js | [API\_Eventloop](API_Eventloop.md) |
| fibers | Fibers | native | [API\_Fibers](API_Fibers.md) |
| fs | Filesystem access | native | [API\_FS](API_FS.md) |
| gd | GD image manipulation | native | [API\_GD](API_GD.md) |
| getopt | Command line option parsing | js | [API\_GetOpt](API_GetOpt.md) |
| GL | OpenGL | native | [API\_GL](API_GL.md) |
| hash | MD5 and SHA1 | js | [API\_Hash](API_Hash.md) |
| html | HTML helpers | js | [API\_HTML](API_HTML.md) |
| http | Server/Client Request/Response | js | [API\_HTTP](API_HTTP.md) |
| js | JS enhancements | js |[API\_JS](.md) |
| jsonRpcHandler | JSON-RPC | js | [API\_JsonRpcHandler](API_JsonRpcHandler.md) |
| Jst | JS templates by Mark Gregory Turansky | js |[API\_Jst](.md) |
| mysql | MySQL database | native | [API\_MySQL](API_MySQL.md) |
| memcached | Memcached | native | [API\_Memcached](API_Memcached.md) |
| mail | Sending email | js | [API\_Mail](API_Mail.md) |
| pgsql | PostgreSQL database | native | [API\_PostgreSQL](API_PostgreSQL.md) |
| process | (sub)process control | native | [API\_Process](API_Process.md) |
| profiler | V8 profiling | native | [API\_Profiler](API_Profiler.md) |
| query | SQL query abstraction | js | [API\_Query](API_Query.md) |
| session | HTTP session | js | [API\_Session](API_Session.md) |
| socket | Sockets | native | [API\_Socket](API_Socket.md) |
| sprintf | sprintf implementation | js | [API\_Sprintf](API_Sprintf.md) |
| sqlite | SQLite database | native | [API\_SQLite](API_SQLite.md) |
| template | Simple templating language | js | [API\_Template](API_Template.md) |
| test | CommonJS testing | js | [API\_Test](API_Test.md) |
| tls | SSL/TLS | native | [API\_TLS](API_TLS.md) |
| websocket | Web Sockets | js | [API\_Websocket](API_Websocket.md) |
| xdom | (old) Xerces-based DOM | native | [API\_XDOM](API_XDOM.md) |
| zlib | zlib compression | native | [API\_Zlib](API_Zlib.md) |