# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/Manual'>proper version of this page</a>.</b></font> #

# User manual #

v8cgi is an embedding of [V8](http://code.google.com/p/v8/), a JavaScript interpreter from Google. v8cgi can be used in many ways; either as a CLI (Command-line Interface) program for executing (shell-)scripts, or as an Apache module / CGI binary for creating and serving web pages.

v8cgi ships with various libraries (modules), which provide additional functionality. v8cgi runs on Linux distributions, MacOS X, FreeBSD and Microsoft Windows.

# First steps #

In order to use v8cgi, you first have to get the binary. Windows users can just download a [precompiled release](http://code.google.com/p/v8cgi/downloads/list), Ubuntu users can [use a PPA](https://launchpad.net/~ondras/+archive/v8cgi); otherwise one has to compile v8cgi from source. There is a separated wikipage dedicated to [Compiling v8cgi](Compiling.md).

When you have a v8cgi working, you might need to setup the configuration file. It needs to be placed to a pre-defined location, which is set at compile time. If unsure, just run v8cgi - it will tell you if the configuration file is not at the correct location.

You should check the configuration file and edit it if necessary. The most important value is `require.paths`, which corresponds to the directory in which v8cgi modules are located. **It is not possible to directly modify require.paths property; one must use array methods to modify its contents.**

**Windows users only:** v8cgi requires v8.dll to be present; additional v8cgi modules (most notably PostgreSQL) have more dll dependencies. These files are located in `dll/` subdirectory of Windows distribution, copy them either to system path or to v8cgi directory as necessary.

# Running #

## As a command-line program ##

Syntax (Linux/BSD/MacOS/Posix):
```
v8cgi [-c configfile] [-d debugger_port] myscript.js
```

Syntax (Windows):
```
v8cgi.exe [-c configfile] [-d debugger_port] myscript.js
```

If no `-c` option is specified, then the system-wide config file is used. The location for this file is set at compile time. If no system config file exists, then v8cgi will refuse to run.

The `-d` options specifies a TCP port for the V8 debugger agent to listen at. If no `-d` option is specified, the debugger agent is disabled.

## As Apache module ##

This is described at [separate page](ApacheConfiguration.md).

# Additional reading #
  * [API Documentation](API.md)
  * [Short code examples](CodeSnippets.md)
  * [Using and creating modules](Modules.md)
  * [Detailed instructions for Ubuntu](InstallationUbuntu.md)