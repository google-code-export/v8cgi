# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/ApacheConfiguration'>proper version of this page</a>.</b></font> #
# Apache configuration #

There are three main ways of using v8cgi with Apache. After you manage to prepare the configuration, go on by trying serving some [sample html](CodeSnippets.md).

**On windows, all necessary dlls must be available in system path!**

## 1. Apache module ##

This is the preferred way.

If you installed the libapache2-mod-v8cgi from v8cgi's PPA, just do
```
sudo a2enmod v8cgi
sudo /etc/init.d/apache2 restart
```
and you are all set. Otherwise:

  1. compile or download mod\_v8cgi (.dll on Windows, .so on Linux)
  1. load the resulting module into Apache:
```
LoadModule v8cgi_module /path/to/the/v8cgi_module.so
```
  1. assign a `v8cgi-script` handler as necessary
```
AddHandler v8cgi-script .ssjs .sjs
```
  1. optionally, you can specify a different config file for v8cgi in Apache's configuration file:
```
v8cgi_Config /path/to/v8cgi.conf
```

## 2. CGI binary - traditional approach ##

This variant is not specific to v8cgi. Apache configured in this way will just **execute** all assigned files (**.ssjs in the example below) and return output.**

```
AddHandler cgi-script .ssjs
```

Note that .ssjs files have to be executable (`chown +r`) and they must contain a valid [shebang line](http://en.wikipedia.org/wiki/Shebang_%28Unix%29) (`#!/path/to/v8cgi`).

Windows users will find this approach problematic, as there is no way to execute arbitrary files with shebang on Windows.

## 3. CGI binary - centralized approach ##

This is the least preferred way.

```
ScriptAlias /v8cgi/ /YOUR_PATH/
AddHandler v8cgi-handler .ssjs
Action v8cgi-handler /v8cgi/BINARY_NAME
```

while substituting:
  * YOUR\_PATH with path to your v8cgi directory,
  * BINARY\_NAME with name of your v8cgi binary.