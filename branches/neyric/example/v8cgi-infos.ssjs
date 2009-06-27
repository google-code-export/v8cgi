/**
 * HTML rendering of the global object
 *
 * WARNING: For debugging purpose only: this is not secure at all ! You should never let your users access to this file.
 */
include("json2");

var htmlDump = function(o) {

   if( o === null) return "null";
   if( o === undefined) return "undefined";

   var t = typeof o;

   if( t == "function") {
     var prototypeFunctions = [];
     for(var fct in o.prototype) {
        prototypeFunctions.push(fct);
     }
     return "("+prototypeFunctions.join(',')+")";
   }
   if( t == "string") return "<span style='color: green;'>\""+o+"\"</span>";
   if( t == "number" || t == "boolean") {
      return "<span style='color: blue;'>"+o+"</span>";
   }

   var str = "<ul>";
   for(var key in o) {
      if(o.hasOwnProperty(key) && key != "global") {
         str += "<li>"+key+": "+htmlDump(o[key])+"</li>";
      }
   }
   str += "</ul>";
   return str;
}

response.write( htmlDump(global) );
