# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/Compiling'>proper version of this page</a>.</b></font> #

# Compiling #

  1. Download and build V8, http://code.google.com/p/v8/. Create a shared library (`library=shared`). Copy it to `/usr/lib/libv8.so`.
  1. In your v8cgi directory, type `scons`. This builds the CGI binary, Apache module, MySQL, SQLite, GD and DOM support. You can turn individual components on/off using command-line options. <font color='red'>There are many command line options available for building v8cgi; to see a list of them with brief explanation, try <code>scons -Q -h</code>.</font>

## Context reusing ##

This is a new experimental feature, available since rev. 454. If you choose to reuse context, the global JS object will be shared amongst requests. At the beginning of each request, the global object is cleared (all its properties are deleted). This brings a significant performance boost (up to 4x better performance in certain scenarios).

To enable context reusing, compile with `reuse_context=1`.

## MySQL ##

  1. Get MySQL development headers (debian: libmysqlclient-dev)
  1. use `scons mysql=1`
  1. optionally specify MySQL header path with `scons mysql=1 mysql_path=/path/to/mysql/libs`

## PostgreSQL ##

  1. Get PostgreSQL development headers (debian: libpq-dev)
  1. use `scons pgsql=1`
  1. optionally specify PostgreSQL header path with `scons pgsql=1 pgsql_path=/path/to/pgsql/libs`

## SQLite ##

  1. Get SQLite3 development headers (debian: libsqlite3-dev)
  1. use `scons sqlite=1`

## FastCGI ##

  1. Get FastCGI development headers (debian: libfcgi-dev)
  1. use `scons fcgi=1`

## GD ##

  1. Get GD development headers (debian: libgd2-dev)
  1. use `scons gd=1`

## DOM ##

  1. Get Xerces-C++ development headers (debian: libxerces-c-dev)
  1. use `scons dom=1`

## OpenGL ##

  1. Get glut-dev and libglew-dev development headers (debian: freeglut3-dev, libglew1.5-dev)
  1. use `scons gl=1`

## Apache module ##

  1. Get Apache and APR development headers
  1. use `scons module=1`
  1. optionally specify Apache and APR header path with `scons module=1 apache_path=/path/to/apache/libs apr_path=/path/to/apr/libs`

## ~~MSVC Express 2008~~ ##

<font color='red'>This section is OBSOLETE, v8cgi is now compiled with MinGW on Windows.</font>

Make sure all relevant includes and libraries are accessible. Try setting these env. paths before compilation:
```
set LIBPATH=C:\Program Files\Microsoft Visual Studio 9.0\VC\lib;C:\Program Files\Microsoft SDKs\Windows\v6.0A\Lib;C:\Program Files\mysql\Lib\opt;C:\Program Files\gd\lib;c:\program files\fcgi\lib
set INCLUDE=C:\Program Files\Microsoft SDKs\Windows\v6.0A\Include;C:\Program Files\gd\include;c:\program files\fcgi\include
```

(edit to reflect your environment)