# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_HTML'>proper version of this page</a>.</b></font> #
# HTML module #

Defined in file `html.js`.

  * `HTML.escape(data)` - converts **<**, **>**, **&**, **"**, **'** to HTML entities
```
response.write( HTML.escape( '<a href="test.php?a=1&b=2">test</a>' ) );
// &lt;a href=&quot;test.php?a=1&amp;b=2&quot;&gt;test&lt;/a&gt;
```
  * `HTML.unescape(data)` - inverse of `HTML.escape`
```
response.write( HTML.unescape( '&amp; &lt; &gt; &quot; &apos; ' ) );
// & < > " ' 
```
  * `HTML.dump(object)` - dumps object contents formatted in HTML