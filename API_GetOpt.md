# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_GetOpt'>proper version of this page</a>.</b></font> #
# GetOpt module #

Defined in file `getopt.js`.

Classes: **GetOpt**.

  * `GetOpt.NO_ARGUMENT`, `GetOpt.OPTIONAL_ARGUMENT`, `GetOpt.REQUIRED_ARGUMENT` - constants
  * `var options = new GetOpt()` - creates new GetOpt instance
  * `options.add(id, desc, value, short, long, argument)` - adds an option:
    * `id` - your option identifier
    * `desc` - textual representation
    * `value` - default value
    * `short` - option letter
    * `long` - long option string
    * `argument` - argument type constant
  * `options.help()` - generates help text
  * `options.parse(arr)` - parse a set of command line arguments. May throw an exception.
  * `options.get(id)` - return option value

## Examples ##

```
var o = new GetOpt();
o.add("verbosity", "Verbosity level", 0, "v", "verbosity", GetOpt.OPTIONAL_ARGUMENT);
o.add("interface", "Interface", "", "i", "interface", GetOpt.REQUIRED_ARGUMENT);
o.add("human", "Human-readable output", false, "h", "human", GetOpt.NO_ARGUMENT);

var help = o.help();
/*
  -v [value], --verbosity[=value] Verbosity level
  -i value, --interface=value     Interface
  -h, --human                     Human-readable output
*/

var args = ["--human", "-vv", "-i", "eth0", "someText1", "someText2"];
o.parse(args);
/*
  o.get("verbosity") == 2;
  o.get("human") == true;
  o.get("interface") == "eth0";
  o.get() == ["someText1", "someText2"];
*/
```