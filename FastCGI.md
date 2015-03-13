# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/FastCGI'>proper version of this page</a>.</b></font> #
# FastCGI support #

v8cgi does not ship with a FastCGI library, so no FCGI methods (such as `FCGI_Accept()`) can be exposed to user-land scripts. Instead, the whole v8cgi binary can act as a FCGI server (when compiled with `fcgi=1`). This allows for other means of communicating with a webserver, along with (plain old) CGI or Apache module approaches.