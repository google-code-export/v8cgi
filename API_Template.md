# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_Template'>proper version of this page</a>.</b></font> #
# Template module #

Defined in file `template.js`.

Classes: **Template**.

  * `var t = new Template(options)` - new template; allowed options:
    * `.path` - path to template files
    * `.suffix` - template file suffix (defult: `.template`)
  * `t.process(file, data)` - processes template file `file`; second argument is used to pass arbitrary data to template
  * (svn only) `t.processString(str, data)` - processes template `str`; second argument is used to pass arbitrary data to template

# Template language syntax #

  * `$(JS expression)` - outputs value of the expression
  * `$code(JS expression)` - evaluates code without outputting anything
  * `$include(filename)` - includes other file

## Example 1 ##

```
<strong>This is a random number: $(Math.random())</strong>

$code( for(var i=0;i<10;i++) { )
<li> $(i) </li>
$code( } )

$include(some_other_template)
```

## Example 2 ##

server side javascript:
```
include('template'); // load the library, or configure on your v8cgi.conf
var t = new Template( { 'path' : '/path/to/template/files/' , 'suffix' : 'html' } );
var d = { 'title': 'my site' , 'content' : HTML.dump( global ) /* not secure */ };
response.write( t.process('testing' , d ) );
```

template file (/path/to/template/files/testing.html):
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
    <title> $( data.title ) </title>
</head>
<body>
    $( data.content )
</body>
</html>
```