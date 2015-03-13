# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_Mail'>proper version of this page</a>.</b></font> #
# Mail module #

Defined in file `mail.js`.

Functions: **mail()**.

```
var to = "target@example.com";
var subject = "test";
var body = "testing the mail!";
var headers = { From: "me@example.com" };
var auth = {
  type: "login",
  user: "test",
  password: "secret"
};

require("mail").mail(to, subject, body, headers, auth);
```