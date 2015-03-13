# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/About'>proper version of this page</a>.</b></font> #
# About v8cgi #

JavaScript on server is becoming very popular. There are many tools out there; there are also many different JS engines/interpreters to build upon. This document explains why you should try v8cgi - a full-featured scripting environment, powered by Google's V8 engine.

## What can v8cgi do for me? ##

There are many tasks that can be solved with v8cgi. It comes bundled with a large set of built-in modules, which means that you can use these features out-of-the-box:

  * **Filesystem IO**: synchronous access to local files and directories
  * **Networking**: low-level sockets, SSL/TLS, WebSocket server module; HTTP and SMTP protocols
  * **Databases**: MySQL, PostgreSQL and SQLite modules
  * **Miscellaneous**: assertion, unit testing, zlib compression, memcache client, GD image manipulation, XMLDOM
  * **Asynchronous network IO**: support for nonblocking sockets; global "eventloop" module for callback-based timeouts and socket reading/writing
  * **Generate web pages**: v8cgi can interface with your favorite webserver using CGI, FastCGI or Apache module APIs. Support for sessions and templating.
  * **Native support for binary data**: all modules which handle binary data use the standardized Binary/F specification.

## But server-side JS is already taken over by [insert-your-favorite-tool]! ##

I believe that diversity is necessary for a healthy ecosystem. While other products might have a well-established user base and huge feature set, not everybody must be necessarily enthusiastic about their APIs, usage, installation, features etc.

Finding event based thinking hard to get right and nightmarish to debug? v8cgi uses a different architectonic paradigm: it represents the more traditional, synchronous server-side programming model. People coming from different languages may find v8cgi's APIs more straightforward.

v8cgi also strongly focuses on CommonJS compatibility. This is one of the primary design goals; I believe that a standardized API is a key value for successfull interoperability.

## Design goals ##

While building v8cgi, I focused mainly on these points:

**Ease of use.** All modules offer a straightforward and documented API; v8cgi comes bundled with several usage examples; there is a support discussion group where people offer help. v8cgi offers tools to solve many everyday scripting isses and challenges.

**CommonJS compliance.** I am a proud member of the CommonJS standardization body; we work closely to ratify and deliver a reasonable and consistent APIs. v8cgi is compliant with every CommonJS specification it implements: module loading, binary data handling, system module, unit testing.

**Cooperation with existing webserver solutions.** One of the many v8cgi use cases is to serve and generate HTML pages, similarly to PHP. You do not need to throw away a properly configured Apache webserver; just delegate request processing to v8cgi. This can be done via CGI, FastCGI or native Apache module. Want some server-side templating, session management, HTTP response headers tuning? All available in v8cgi.

## Is this stuff usable? ##

Absolutely. v8cgi is in development from 2008; it is actually older than Node. I am using v8cgi for various tasks from its first versions.

  * v8cgi is used as a WebSocket backend for all my JavaScript network projects: [Just Spaceships](https://developer.mozilla.org/en-US/demosdetail/just-spaceships), [Collaborative Draw](https://developer.mozilla.org/en-US/demosdetail/collaborative-draw), [Atoms](https://developer.mozilla.org/en-US/demosdetail/atoms), [Geometry Wars](https://developer.mozilla.org/en-US/demosdetail/geometry-wars)
  * v8cgi was used to extract and preprocess data for the [Drago](http://ondras.zarovi.cz/games/drago/) remake
  * v8cgi was used to prepare image sprites for the [js-like roguelike game](http://ondras.zarovi.cz/games/js-like/)
  * Several private websites, such as my personal issue tracker, are powered using v8cgi in CGI mode

The project is stable and mature now. Bugs may ocasionally emerge, but will be squished without warning.