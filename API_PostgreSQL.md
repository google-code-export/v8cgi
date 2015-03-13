# <font color='red'><b>v8cgi is now known as <a href='http://code.google.com/p/teajs/'>TeaJS</a>! Please see the <a href='http://code.google.com/p/teajs/wiki/API_PostgreSQL'>proper version of this page</a>.</b></font> #
# PostgreSQL module #

Defined in file `pgsql.so` or `pgsql.dll`.

Classes: PostgreSQL

  * `var db = new PostgreSQL('host=/var/run/postgresql/ port=5432 dbname=v8cgi user=v8 password=v8 timeout=5');` - creates a new PostgreSQL connection using the specified connection string
  * `var db = new PostgreSQL();` - alternatively, creates a new PostgreSQL object without yet connecting to a database server
  * `db.connect('<pg connection string>');` - establishes a new PostgreSQL connection using the specified connection string
  * `db.connect({'host':'/var/run/postgresql/', 'port':'5432', 'dbname':'v8cgi'});` - alternative syntax using a hash object for specifying connection parameters
  * `db.close();` - closes the connection to the database

  * `var res = db.query('<SQL query string>');` - executes the specified SQL query and assigns a corresponding result object to the variable "res"
  * `res.numRows()` - returns the number of rows present in the query result
  * `res.numFields()` - returns the number of columns present in the query result
  * `res.fetchResult(<row>,<col>)` - returns the datum at the specified row and column from the query result
  * `res.fetchAll()` - returns an array of hash objects containing all the rows and columns from the query result
  * `res.fetchRow(<row>)` - returns a hash object containing the fields of the specified row or, if not specified, the next row based on the internal row pointer, from the query result

  * `var res = db.queryParams('<SQL query string with substitution placeholders>',[<array containing substitution values>]);` - executes the specified SQL query with the specified substitution values (similar to an "anonymous" prepared query; c.f. PHP's pg\_query\_params function)

  * `var pquery = db.prepare('<prepared query name','<SQL prepared query string>');` - creates a prepared query having the specified name and assigns a corresponding handle object to the variable "pquery"
  * `var res = pquery.execute([<array containing substitution values>]);` - executes the prepared query, substituting the values in the specified array for the corresponding placeholders in the prepared query
  * `var res = db.execute('<prepared query name',[<array containing substitution values>]);` - alternative syntax for executing a prepared query
  * `db.deallocate('<prepared query name>');` or `pquery.deallocate();` - deletes the specified prepared query

  * `var res = db.send('<SQL query string>');` - sends the specified SQL query to the database server asynchronously

### Example ###

```
include('pgsql') ; // load the library, or configure on your v8cgi.conf
var db = new PostgreSQL() ;
try {
  db.connect(
    { 'host':'localhost'
    , 'port':'5432'
    , 'user':'test'
    , 'password':'Testing-=123'
    , 'dbname':'test'
    }
  ) ;
} catch(e) {
  response.write('cannot connect to database') ;
  exit(1) ;
  // warning: print e would show your username and password if any
}

// execute normal query
var qs =
  [ 'SELECT tables.relname::TEXT as "tablename"'
  , '   FROM pg_class AS tables'
  , '     JOIN pg_namespace AS schemas'
  , '       ON tables.relnamespace = schemas.oid'
  , '       AND schemas.nspname = $$public$$' 
  , '       AND tables.relkind = $$r$$'
  , '   ORDER BY tables.oid DESC'
  ].join('\n') ;
response.write( '<pre>' + qs + '</pre>' ) ;

// execute query
var res = db.query( qs ) ;
//response.write( 'res : ' + HTML.dump(res) ) ;
//response.write( 'res.numRows() : ' + res.numRows() + '<br/> ' ) ;
//response.write( 'res.numFields() : ' + res.numFields() + '<br/>' ) ;
//response.write( 'res.fetchAll() : ' + HTML.dump(res.fetchAll()) ) ;

// fetch all result
for(var x=0;x<res.numRows();++x) { // for each row
  var row = res.fetchRow(x) ;
  response.write( x + ' ' ) ;
  for(var y=0;y<res.numFields();++y) { // for each field
    response.write( row[y] + '<br/>' ) ;
  } 
}
db.close() ;
```