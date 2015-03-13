# New name and new location! #

**v8cgi is now known as [TeaJS!](http://code.google.com/p/teajs/)** This page is not maintained anymore. Please visit the [new site](http://code.google.com/p/teajs/) instead.

## What is v8cgi ##

Small set of C++ and JS libraries, allowing coder to use JS as a server-side HTTP processing language. Basic functionality includes IO, GD, MySQL, Sockets, Templating,  [FastCGI](FastCGI.md) and Apache module.

If you wish to support this project, <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3340079'><img src='https://www.paypal.com/en_GB/i/btn/btn_donate_LG.gif' alt='Donate at PayPal' title='Donate at PayPal' /></a> at PayPal!



## News ##

## 8. 6. 2012 ##
Version 0.9.3 is ready! This is mostly a bugfix release, including fixes for Socket, TLS and WebSocket modules. Windows build now contains a TLS module.

## 15. 12. 2011 ##
Version 0.9.2 is ready! v8cgi is now considered stable and recommended for general usage. Apart from the downloads provided at Google Code, there is now a [PPA Repository with Ubuntu packages](https://launchpad.net/~ondras/+archive/v8cgi).

Version 0.9.2 is probably the last major release before 1.0 will be available. There are several changes which increase the compatibility with CommonJS: most notable, the **include** function was finally removed for good. Also, **Config.libraryAutoload** is no longer available.

Major changes are available in the [Changelog](http://code.google.com/p/v8cgi/wiki/Changelog); most interesting highlights:

  * Improved sockets (non-blocking; select)
  * Websocket library
  * TLS module

## 26. 9. 2011 ##
Version 0.9.1 is ready! This is a bugfix release, containing numerous small improvements commited during last months. Most notable changes:

  * Faster global object reusing
  * Refactored error handling
  * Thread safety
  * More robust HTTP uploads

## 9. 12. 2010 ##
Version 0.9.0 is ready! This release is a major step in v8cgi development (hence the big increase in version number); I am proud to announce a large number of improvements and changes:

  * FreeBSD support
  * Many new modules (hash, base64, mail, fibers, memcached, profile, zlib)
  * Binary finally completely available (in form of CommonJS Binary/F Buffer implementation)
  * Improved wiki documentation
  * Several backwards-incompatible changes:
    * Removed module "util"
    * Planning to remove "include" function
    * Session no longer automagically creates global variable

**UPDATE:** Windows build of v8cgi 0.9.0 is finally available for download :)

## 23. 5. 2010 ##
Version 0.8.2 released. This is only a very minor bugfix update.

## 12. 5. 2010 ##
Release 0.8.1 is ready! This is a bugfix release, no new major features were added. Improvements were made in SConstruct build process, Apache, MySQL and DOM modules. New binary module (binary-f) is present; hopefully, one day will all these proposals converge to a final binary library.

Windows binary is still compiled without Context reusing. The XDOM module is slowly getting obsoleted. The configuration option `Config.httpHandler` was removed.

For a full list of changes, see the [Changelog](Changelog.md).

## 8. 2. 2010 ##
Release 0.8.0 is ready! Some big changes and features made it into this release: Binary/B is available and test/assert modules are now also CommonJS compatible. v8cgi now builds on Mac, features the "global.v8cgi" free variable, supports multiple MySQL queries. A new DOM module was introduced.

Windows binary is compiled without Context reusing, as this feature is still somewhat problematic. Also, the XDOM (Xerces-based DOM) module is not included in Windows release. Use the JS DOM module instead.

For a full list of changes, see the [Changelog](Changelog.md).

## 16. 11. 2009 ##
Release 0.7.5 is ready! Many things have changed and more features are available. v8cgi achieves higher level of compatibility with CommonJS Modules/1.1 and Windows users can now use DOM and PostgreSQL modules. For a full list of changes, see the [Changelog](Changelog.md).

## 20. 10. 2009 ##
Release 0.7.0 (anniversary edition) is ready! This release brings many new modules (postgresql, process, dom, gl, sprintf more), better (configurable) error handling, stability fixes and more improvements. Version 0.7.0 also features code from much more contributors than before.

## 25. 6. 2009 ##
Release 0.6.0 is ready! Numerous improvements, features and fixes were implemented in this version. New support for SQLite and Context reusing. New unit tests, reworked `global.system` object, refactored DB libraries and much more.

## 15. 6. 2009 ##
<font color='red'><a href='https://code.google.com/p/v8cgi/source/detail?r=454'>Revision 454</a> renames several scons options. Type <code>scons -h</code> to see a list of them.</font>

## 3. 6. 2009 ##
Release 0.5.2 is ready! Complete V8 sources are now included in the src tarball. New features include Securable Modules compliance, testing framework, assert+getopt modules and lots of stability and compatibility-related fixes.

## 14. 4. 2009 ##
Starting from [revision 391](https://code.google.com/p/v8cgi/source/detail?r=391), v8cgi now ships with an assertion module, basic set of unit tests and a tiny testing framework runner.

## 8. 4. 2009 ##
[Revision 381](https://code.google.com/p/v8cgi/source/detail?r=381) is compliant with Securable Modules specification and passes all current tests at http://code.google.com/p/interoperablejs/ :)

## 30. 3. 2009 ##
Release 0.5.0 is ready! This version fixes several fatal bugs and adds support for command line arguments. The MySQL module now automatically closes opened connections on exit. **UPDATE:** 0.5.1 contains a critical bugfix regarding MySQL with Apache module :)

## 26. 2. 2009 ##
Release 0.4.0 is ready! Module system has been rewritten to support both include() and require() methods; path handling is better and MySQL module is able to close its database connection.

## 6. 2. 2009 ##
Release 0.3.0 is ready! Apache module included, for both Windows and Linux platforms. Also, the build process on MacOS X is now a bit easier :)

## 22. 1. 2009 ##
Release 0.2.0 is ready! This one contains many improvements and libraries: sockets, http client, fastcgi and GD. Windows build does not contain FastCGI support.

## 6. 1. 2009 ##
Release 0.1.0 is ready!