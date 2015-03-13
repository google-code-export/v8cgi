#Brainstorm ideas for v8cgi
# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/Brainstorm'>proper version of this page</a>.</b></font> #

# Introduction #

This page to document ideas to implement in v8cgi.


## Error Handling ##

### The situation ###

Currently, v8cgi simply shows a 500 page if there's any errors in the javascript.

I noticed that if a try/catch is put around the code, you can catch all errors!

### Resolution ###

I suggest that the through some mechanism, a try/catch is automatically inserted around the main javascript file to be executed.  The catch block would invoke a default onError() handler that would print a nice error page.  If v8cgi is configured for "production" mode, the error page would be something like the current 500 page (apache's).  If not, then the error page could dump out the exception.

Note that code can throw two ways:

  * throw "some message";
  * throw new Error("some message");

**If the second is thrown, then a javascript stack trace is available to the error handler!**

Thus, v8cgi source should be examined and the second type of exception thrown anywhere an exception is currently thrown (may already be the case).

The application should be able to provide its own error handler.

<font color='blue'>
First of all, it is necessary to consider v8cgi used not only as an apache module / cgi binary, but also as a general purpose scripting interpreter. Therefore, all that is specific for server-side-html-page-production should NOT be complexly bound to v8cgi.<br>
<br>
Note that in src/js_app.cc, line # approx. 231, there is a global error handler marked with FIXME. This code handles all JS errors which are uncaught - and it is up to us to decide what to do with them. (Currently, there are two options - throw them to stderr or throw them to stdout/response.) However, this is used only as a last resort for exceptions not handled via JS means.<br>
<br>
In my opinion, we should create a web framework (pure JS) which would take care of ideas mentioned in this page (error handling, output buffering, ...). v8cgi itself should only contain the stuff that <i>must</i> be implemented natively and not via JS means.<br>
<br>
-- ondrej<br>
</font>


## Output Buffering ##

### The situation ###

The response object has no concept of output buffering.  The concept is similar to PHP's:
  * ob\_start()
  * ob\_get\_contents()
  * ob\_end\_clean()
  * ob\_end\_flush()

Using this scheme allows the server to know content-length, and allows error handlers to do an ob\_end\_clean() and then print a nice error page.

### Resolution ###

ob\_start() should be done automatically at script start.  ob\_end\_flush() should be done automatically right at script exit.

## Application-Wide Session ##

### The situation ###

For lack of a better description, this is a hash array stored in memory.  All v8cgi threads running can store to this hash array, any javascript object.

The API might look like:

  * system.shared.get(key)
  * system.shared.put(key, obj)
  * system.shared.lock(type) // type is one of read or write
  * system.shared.unlock()

Note that the lock must be cleared onexit().

We have sockets.  Consider code like this:
```
 var socket = socket.open(...);
 var cacheable = { type: 'aim', socket: socket };
 system.shared.put('aimsocket', cacheable);
```

You can't serialize and write an open socket to a file on disk!

See: http://www.nabble.com/Instance-a-c%2B%2B-object-on-Apache-shared-memory-td18377523.html