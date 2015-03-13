# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_HTTP'>proper version of this page</a>.</b></font> #
# HTTP module #

Defined in file `http.js`.

## Server-side HTTP ##

Classes: **ServerRequest**, **ServerResponse**. These should be used in CGI/FastCGI scenario to process request and create a response page.

  * `require("http")`
  * `request instanceof ServerRequest` - created automatically; use to process request info
  * `request.get` - hash with GET variables
  * `request.post` - hash with POST variables
  * `request.cookie` - hash with cookie variables
  * `request.method` - HTTP method used (uppercase)
  * `request.files` - hash with uploaded files. Each file has the following properties:
    * `.data` - content
    * `.headers` - hash with headers
    * `.originalName` - file's original name
  * `request.header(headerName)` - returns request HTTP header
  * `request.headers()` - returns all request HTTP headers
  * `request.requestBody(length)` - returns `length` bytes from the request body. This is irrelevant for POST method; its data is processed automatically. Use `requestBody()` for PUT requests.

  * `response instanceof ServerResponse` - created automatically; use to adjust HTTP response headers and body
  * `response.write(data)` - outputs `data`
  * `response.header(headers)` - outputs `headers` (hash) as HTTP response headers
  * `response.cookie(name, value, expires, path, domain, secure, httponly)` - sets a cookie (`expires` is a JS date object)
  * `response.status(statusCode, [textualRepresentation])` - sets a HTTP response status

## Client-side HTTP ##

Classes: **ClientRequest**, **ClientResponse**. These should be used to create a HTTP request and process/access received data.

  * `var request = new ClientRequest(url)` - creates a request
  * `request.get` - hash with GET variables
  * `request.post` - hash with POST variables. To send a custom post body, just set `request.post = "anyCustomData"`
  * `request.cookie` - hash with cookie variables
  * `request.method` - HTTP method to be used (uppercase)
  * `request.header(headers)` - sets HTTP requests header(s), specified as a hash
  * `var response = request.send(follow)` - sends a request, returns an instance of `ClientResponse`. If `follow` is true, redirects are transparently followed.

  * `response.data` - response body
  * `response.status` - HTTP response status code
  * `response.statusReason` - returns a textual representation of HTTP response status
  * `response.header(name)` - returns a given response header
  * `response.headers(name)` - returns all response headers