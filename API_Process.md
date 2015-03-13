# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_Process'>proper version of this page</a>.</b></font> #
# Process control module #

Defined in file `js_process.cc`. Not complete at all.

Classes: **Process**.

  * `var p = new Process()` - creates new Process object
  * `var code = p.system(command)` - executes a given `command`, returns its exit code
  * `var data = p.exec(command)` - executes a given `command`, returns its output