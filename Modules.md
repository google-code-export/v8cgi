# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/Modules'>proper version of this page</a>.</b></font> #

# Modules #

JS modules in v8cgi closely follow the [CommonJS Modules specification, version 1.1.1](http://wiki.commonjs.org/wiki/Modules/1.1.1). While modules are simple JS libraries, special care should be taken to make them interoperable and correct.

## Module scope ##

Every module is a simple JS file, having a ".js" extension. Even the v8cgi configuration file and the main script file are treated as modules by v8cgi; they are evaluated in the same way as any other module.

How this works: v8cgi wraps the code of a module in an anonymous function, which is then executed. Every module is therefore separated from global scope and from other modules as well.

## exports ##

Inside a module, there is a free variable `exports`, which is a JS Object. This is the primary and only way for a module to provide some functionality to outside world. Every class, variable and function which is to be used outside of the module must be assigned as a property to the `exports` variable.

## require() ##

Modules are loaded using the `require()` function. This function takes one argument - name of the module being loaded - and returns module's exports.

**NOTE:** exports are cached. Repeated calls to `require()` return always the same object.

Modules can be identified in three distinct ways:
  1. **require("./module")** - module names starting with a dot are searched relative to the current module
  1. **require("module")** - module names not starting with a dot are searched relative to global search roots, defined in `require.paths`
  1. **require("/module")** - absolute module names are treated "as is". This is v8cgi's extension to CommonJS Modules spec.

# Example #

## module.js ##
```
exports.SomeClass = function() {
}

exports.functionA = function() {
  functionB();
}

var functionB = function() {
}
```
## main.js ##
```
/* access only one exported part of module */
var SomeClass = require("./module").SomeClass();

/* access the whole exports object */
var moduleExports = require("./module");
moduleExports.functionA();

/* there is NO way to access functionB, because it is not exported */
moduleExports.functionB(); /* ERROR, there is no such property */
```